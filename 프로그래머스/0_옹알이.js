/**
 * @name 옹알이
 * @date 2022-10-24
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript
 */
function solution(babbling) {
  let answer = 0;
  const valid = ['aya', 'ye', 'woo', 'ma'];

  for (const babb of babbling) {
    const notValidStr = valid.reduce((prev, cur) => prev.replaceAll(cur, ''), babb);
    if (notValidStr) continue;

    if (valid.some((v) => babb.indexOf(`${v}${v}`) > -1)) continue;
    answer += 1;
  }
  return answer;
}
