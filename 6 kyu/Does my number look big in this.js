function narcissistic(value) {
  return value
    .toString()
    .split("")
    .reduce((sum, x) => sum + x ** (+value).toString().length, 0) === value
    ? true
    : false;
}
