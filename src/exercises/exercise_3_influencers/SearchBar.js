import React from "react";
import styled from "styled-components";

const Input = styled.input({
  width: "100%",
  padding: 12,
  marginBottom: 12,
  color: "black",
  fontSize: 16,
  fontWeight: 500,
  letterSpacing: -0.4,
  border: "none",
});

const SearchBar = ({ search, setSearch, data }) => (
  <div
    style={{
      display: "flex",
      paddingTop: 12,
    }}
  >
    <Input
      placeholder="Search by indication, affiliation, or position..."
      aria-label="search"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  </div>
);

export default SearchBar;
