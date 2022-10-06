/**
 * @name 올바른_괄호
 * @date 2022-10-06
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */
function solution(s) {
  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack += 1;
    if (s[i] === ')') stack -= 1;
    if (stack < 0) return false;
  }

  return stack === 0;
}
