function maskify(cc) {
  if (cc.length < 4) {
    return cc;
  }
  let aa = cc;
  let mask = '';
  for (let i = 0; i < cc.length - 4; i++) {
    mask += '#';
  }
  return mask + cc.slice(-4);
}
