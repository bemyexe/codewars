const differenceOfSquares = (n) => {
  let arr = Array.from({ length: n + 1 }, (v, i) => i);
  let num1 = arr.reduce((acc, item) => acc + item, 0) ** 2;
  let num2 = arr.reduce((acc, item) => acc + item ** 2, 0);
  return num1 - num2;
};
