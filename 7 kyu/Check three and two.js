function checkThreeAndTwo(a) {
  let set = new Set(a);
  if (set.size > 2 || set.size === 1) {
    return false;
  }

  let arr = Object.values(
    a.reduce((acc, item) => {
      if (!acc[item]) {
        acc[item] = 1;
      } else {
        acc[item]++;
      }
      return acc;
    }, {})
  );

  for (let key in arr) {
    if (arr[key] === 3 || arr[key] === 2) {
      return true;
    } else {
      return false;
    }
  }
}
