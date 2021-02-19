import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import styled from "styled-components";
import db from "../../data.json";

import uniqueBy from "../exercise_1_uniqueBy";
import filterBy from "../exercise_2_filterBy";
import SortBy from "./SortBy";
import SearchBar from "./SearchBar";
import Table from "./Table";

const Container = styled.div({
  border: "1px solid black",
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: "#E8EBEC",
});

const Influencers = () => {
  const [search, setSearch] = useState("");
  const uniqueData = uniqueBy(db, "member");
  const [data, setData] = useState(uniqueData);
  // const [click, setClick] = useState(null);
  useEffect(() => {
    const filteredData = filterBy(uniqueData, search, [
      "indicationCategory",
      "affiliation",
      "affiliationPosition",
    ]);
    !filteredData.length && search.length === 0
      ? setData(uniqueData)
      : setData(filteredData);
  }, [search]);

  // if (click === "prior") {
  //   const sortedData = SortBy(data);
  //   setData(sortedData);
  //   setClick(null);
  // }

  const columns = React.useMemo(
    () => [
      {
        Header: "Member Information",
        columns: [
          {
            Header: "Member",
            accessor: "member",
          },
          {
            Header: "Type",
            accessor: "influencerType",
          },
          {
            Header: "Category",
            accessor: "indicationCategory",
          },
          {
            Header: "Affiliation",
            accessor: "affiliation",
          },
          {
            Header: "Title",
            accessor: "affiliationPosition",
          },
          {
            Header: "State",
            accessor: "primaryState",
          },
          {
            Header: "Priority",
            accessor: "priority",
          },
        ],
      },
    ],
    []
  );
  // Hook - UseTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Container>
      <h1>Search for Oncologists</h1>
      <SearchBar
        setSearch={setSearch}
        search={search}
        data={data}
        setData={setData}
      />

      {data.length && (
        <Table
          getTableProps={getTableProps}
          getTableBodyProps={getTableBodyProps}
          headerGroups={headerGroups}
          rows={rows}
          prepareRow={prepareRow}
          useTable={useTable}
        />
      )}
    </Container>
  );
};

export default Influencers;
