/**
 * @name 최댓값과 최솟값
 * @date 2022-10-06
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript
 */

function solution(s) {
  const arr = s.split(' ');
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
