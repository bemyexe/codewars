function removeSmallest(n) {
  if (n.length === 0) {
    return [];
  }

  let min = Math.min(...n);
  let index = n.indexOf(min);
  return [...n.slice(0, index), ...n.slice(index + 1)];
}
