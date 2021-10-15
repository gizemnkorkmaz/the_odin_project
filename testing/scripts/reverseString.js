function reverseString(string) {
  const reversed = string.split("").reverse().join("");
  return reversed;
}

module.exports = reverseString;
