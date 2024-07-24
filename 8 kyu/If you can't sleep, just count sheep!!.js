var countSheep = function (num) {
  let str = '';
  if (!num) {
    return str;
  }

  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
