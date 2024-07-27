function explode(x) {
  if (typeof x[0] == 'number' && typeof x[1] == 'number') {
    return Array(x.reduce((acc, item) => acc + item, 0)).fill(x);
  }

  if (typeof x[0] == 'string' && typeof x[1] == 'string') {
    return 'Void!';
  }

  for (let i = 0; i < x.length; i++) {
    if (
      (typeof x[i] == 'string' && x[i + 1] == 0) ||
      (x[i] == 0 && typeof [x + 1] == 'string')
    ) {
      return [];
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (
      (typeof x[i] == 'string' && typeof x[i + 1] == 'number') ||
      (typeof x[i] == 'number' && typeof x[i + 1] == 'string')
    ) {
      return Array(x.find((x) => typeof x == 'number')).fill(x);
    }
  }
}
