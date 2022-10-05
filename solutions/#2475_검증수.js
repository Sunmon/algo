const fs = require('fs');

const readFile = (dir) => {
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

function solution(src) {
  const reader = readFile(src);
  const answer = reader().split(' ').reduce((p, c) => (p + (+c * +c)), 0) % 10;
  console.log(answer);
}

solution('/dev/stdin');
// solution('./input.txt');
