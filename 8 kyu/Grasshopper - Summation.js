var summation = function (num) {
  return [...Array(num).keys()].reduce((sum, a) => sum + a + 1, 0);
};
