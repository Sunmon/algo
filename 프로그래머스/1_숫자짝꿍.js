/**
 * @name 숫자짝꿍
 * @date 2022-10-24
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/131128
*/

function solution(X, Y) {
  const num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let str = [];

  for (const i of X) {
    num[+i] += 1;
  }
  for (const i of Y) {
    num[+i] -= 1;
    if (num[+i] >= 0) {
      str.push(i);
    }
  }

  if (!str.length) return '-1';
  str = str.sort((a, b) => b.localeCompare(a));
  if (str[0] === '0') return '0';
  return str.join('');
}
