function strCount(s, l) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === l) {
      count++;
    }
  }
  return count;
}
