function sumNoDuplicates(num) {
  let numList = num.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    } else {
      acc[item]++;
    }
    return acc;
  }, {});
  let arr = [];
  for (let key in numList) {
    if (numList[key] < 2) {
      arr.push(+key);
    }
  }
  return arr.reduce((acc, item) => acc + item, 0);
}
