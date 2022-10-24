/**
 * @name 삼총사
 * @date 2022-10-24
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript
*/

function solution(number) {
  let answer = 0;
  const num = number.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] > 0) break; // 이미 num의 첫번째 수가 0 초과이므로 진행하지 않는다.
    for (let j = i + 1; j < num.length - 1; j++) {
      let sum = num[i] + num[j];
      if (sum > 0) break; // j를 변경해봤자 sum > 0이므로 진행하지 않는다.
      for (let k = num.length; k > j; k--) {
        sum = num[i] + num[j] + num[k];
        if (sum === 0) {
          answer++;
        }
        if (sum < 0) break; // k를 더 변경해봤자 sum이 계속 작아지므로 j를 변경한다.
      }
    }
  }
  return answer;
}
