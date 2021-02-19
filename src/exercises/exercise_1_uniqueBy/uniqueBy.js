export default function uniqueBy(data, inputkey) {
  let uniqueHash = {};
  // iterate through the list of data objects
  for (let i = 0; i < data.length; i++) {
    let object = data[i];
    for (let key in object) {
      // Now, within each data object iterate only until you find the inputkey
      if (key === inputkey) {
        if (!uniqueHash[object[key]]) {
          uniqueHash[object[key]] = true;
        } else {
          // splice of the duplicate dataobject from the list
          data.splice(i, 1);
        }
        break;
      }
    }
  }
  return data;
}
