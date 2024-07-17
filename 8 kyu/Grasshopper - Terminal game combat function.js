function combat(health, damage) {
  let ans = health - damage;
  if (ans < 0) {
    return 0;
  }
  return ans;
}
