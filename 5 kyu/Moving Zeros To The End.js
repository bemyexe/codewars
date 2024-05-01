function moveZeros(arr) {
  let newArr = [];
  return newArr.concat(
    arr.filter((item) => item !== 0),
    arr.map((x) => x).filter((item) => item === 0)
  );
}
