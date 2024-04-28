function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((item, index, array) =>
      array.indexOf(item) == array.lastIndexOf(item) ? "(" : ")"
    )
    .join("");
}
