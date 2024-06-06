function firstNonRepeatingLetter(s) {
  let charCounter = {};
  let sLower = s.toLowerCase();

  for (let char of sLower) {
    charCounter[char] = (charCounter[char] || 0) + 1;
  }

  for (let char of s) {
    if (charCounter[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return "";
}
