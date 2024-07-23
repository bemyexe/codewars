const sumDigits = (n) =>
  Math.abs(n)
    .toString()
    .split('')
    .reduce((acc, item) => acc + +item, 0);
