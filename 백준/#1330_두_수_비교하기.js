const fs = require('fs');

const readFile = (dir) => {
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

function solution(src) {
  const reader = readFile(src);
  const [a, b] = reader().split(' ').map(Number);
  console.log(a < b ? '<' : a > b ? '>' : '==');
}

// solution('/dev/stdin');
solution('./input.txt');
