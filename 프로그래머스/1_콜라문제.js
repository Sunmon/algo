/**
 * @name 콜라문제
 * @date 2022-10-24
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript
*/

function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const newBottle = ((n / a) | 0) * b;
    const remain = n % a;
    n = newBottle + remain;
    answer += newBottle;
  }

  return answer;
}
