function XO(str) {
  let arr = str.toLowerCase().split('');
  return (
    arr.filter((item) => item === 'o').length ===
    arr.filter((item) => item === 'x').length
  );
}
