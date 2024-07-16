function digPow(n, p) {
  let num = n
    .toString()
    .split('')
    .reduce((acc, item) => {
      acc += parseInt(item) ** p;
      p++;
      return acc;
    }, 0);

  return num % n === 0 ? num / n : -1;
}
