function highAndLow(numbers) {
  let arr = numbers.split(" ").sort((a, b) => a - b);
  return `${arr.at(-1)} ${arr[0]}`;
}
