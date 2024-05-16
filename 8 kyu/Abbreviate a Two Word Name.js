function abbrevName(name) {
  let editedName = name.split(" ").map((item) => item[0].toUpperCase());
  return editedName[0] + "." + editedName[1];
}
