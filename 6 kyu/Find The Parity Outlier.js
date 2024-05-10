function findOutlier(integers) {
  let a = [];
  let b = [];

  for (let even of integers) {
    if (even % 2 == 0) {
      a.push(even);
    }
  }
  if (a.length == 1) {
    return +a;
  }
  for (let odd of integers) {
    if (odd % 2 !== 0) {
      b.push(odd);
    }
  }
  if (b.length == 1) {
    return +b;
  }
}
