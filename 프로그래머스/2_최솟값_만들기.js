/**
 * @name 최솟값_만들기
 * @date 2022-10-06
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
 */

function solution(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
