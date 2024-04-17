function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((x) => x ** 2)
    .join("");
}
