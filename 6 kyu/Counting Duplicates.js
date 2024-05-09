function duplicateCount(text) {
  let newText = text
    .toLowerCase()
    .split("")
    .filter(
      (item, index, array) => array.indexOf(item) !== array.lastIndexOf(item)
    );
  let set = new Set(newText);
  return set.size;
}
