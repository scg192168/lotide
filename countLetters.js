/** This javascript code defines a function called 'countLetters'taking a 
string as input and returning object containing the count of each letter
in the output string*/

const countLetters = function(string) {
  const result = {};
  const newString = string.split(" ").join("");
  for (const letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;