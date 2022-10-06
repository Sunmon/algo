/**
 * @name 이진_변환_반복하기
 * @date 2022-10-06
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */
function solution(s) {
  const answer = [0, 0];
  while (s.length > 1) {
    const next = s.replace(/0/g, '');
    answer[0] += 1;
    answer[1] += s.length - next.length;
    s = next.length.toString(2);
  }
  return answer;
}

console.log(solution('110010101001'));
