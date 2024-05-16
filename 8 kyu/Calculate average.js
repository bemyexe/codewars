function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let sumArr = array.reduce((sum, item) => item + sum, 0);
  return sumArr / array.length;
}
