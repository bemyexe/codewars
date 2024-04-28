function findUniq(arr) {
  return arr.find((a, b, c) => c.indexOf(a) == c.lastIndexOf(a));
}
