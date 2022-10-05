const fs = require('fs');

const readFile = (dir) => {
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

function solution(src) {
  const reader = readFile(src);
  const n = Number(reader());
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += `${'*'.repeat(i + 1)}\n`;
  }
  console.log(answer);
}

// solution('/dev/stdin');
solution('./input.txt');
