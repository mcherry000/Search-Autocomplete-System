// Function to sort by "priority"
export default function sortBy(data) {
  // Using array indices as values to priorities we sort by numeric values [0,1,2]
  const arr = ["High", "Medium", "Low"];
  const output = data.sort((a, b) => {
    return arr.indexOf(a.priority) - arr.indexOf(b.priority);
  });
  return output;
}
