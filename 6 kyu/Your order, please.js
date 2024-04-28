function order(words) {
  if (words.length == 0) {
    return words;
  }
  let arr = words.split(" ");
  let newArr = [];
  for (let i = 1; i < 10; i++) {
    for (let key of arr) {
      if (key.includes(i)) {
        newArr.push(key);
      }
    }
  }

  return newArr.join(" ");
}
