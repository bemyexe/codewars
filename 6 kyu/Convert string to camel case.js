function toCamelCase(str) {
  return str
    .split(/\-|\_/)
    .map((a, b) => (b == 0 ? a : a[0].toUpperCase() + a.slice(1)))
    .join("");
}
