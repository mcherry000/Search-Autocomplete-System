// Build a Suffix trie class for string search
class Trie {
  constructor() {
    this.root = {};
  }
  // method to insert characters of a word in trie
  insert(word, idx) {
    let node = this.root;
    // starting at the root
    for (let char of word) {
      // convert data input to lowercase
      char = char.toLowerCase();
      if (!node[char]) {
        node[char] = {};
        node[char].index = [idx];
      }
      node[char].index.push(idx);
      node = node[char];
    }
  }
  // Method to search for matching string in trie, String does not have to be a word! It can be half a word. It will enable autocomplete and quick search.
  search(str) {
    console.log("searching for word=>", str);
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (!node[char]) {
        console.log("none! No Match Found");
        break;
      } else {
        if (i === str.length - 1) {
          return node[char].index;
        }
      }
      node = node[char];
    }
    return [];
  }
}
// Main function
export default function filterBy(data, searchTerm, keys) {
  let trie = new Trie();
  // create a trie of values of all the keys in a given input.
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    for (let key in obj) {
      if (keys.includes(key)) {
        const arr = obj[key].split(" ");
        for (let word of arr) {
          trie.insert(word, i);
        }
      }
    }
  }
  // Array of Indices(input array) which match with our required string.
  const ind = trie.search(searchTerm);
  let result = {};
  let output = [];
  // if string matches and has a list of matching indices, create a output array of unique(non-duplicate) objects
  if (ind.length) {
    for (let id of ind) {
      if (!result[id]) {
        result[id] = true;
        output.push(data[id]);
      }
    }
    console.log("length of output array->", output.length);
    return output;
  } else return [];
}
