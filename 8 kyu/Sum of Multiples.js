function sumMul(n, m) {
  let sum = 0;
  if (m <= 0) return 'INVALID';
  for (let i = n; i < m; i++) {
    if (!(i % n)) {
      sum += i;
    }
  }
  return sum;
}
