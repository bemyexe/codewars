function roundToNext5(n) {
  if (n == 0) return 0;
  for (let i = n; true; ++i) {
    if (!(i % 5)) {
      return i;
    }
  }
}
