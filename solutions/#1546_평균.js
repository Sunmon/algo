const fs = require('fs');

const readFile = (dir) => {
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

function solution(src) {
  const reader = readFile(src);
  const n = Number(reader());
  const line = reader().split(' ').map(Number);
  console.log(line.reduce((p, c) => p + c, 0) * 100 / (n * Math.max(...line)));
}

solution('/dev/stdin');
// solution('./input.txt');
