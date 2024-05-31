function solution(str) {
  return (str + "_").match(/../g) || [];
}
