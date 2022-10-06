/**
 * @name JadenCase_문자열_만들기
 * @date 2022-10-06
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12951?language=javascript
 */

function solution(s) {
  return s.toLowerCase().replace(/(\w)(\w*)/g, ($1, $2, $3) => `${$2.toUpperCase()}${$3}`);
}
