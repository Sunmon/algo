const fs = require('fs');

const readFile = (dir) => {
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

function solution(src) {
  const reader = readFile(src);
  const line = reader().toUpperCase();
  const arr = Array(26).fill(0);
  for (let i = 0; i < line.length; i++) {
    arr[line.charCodeAt(i) - 65]++;
  }

  const answer = arr.reduce((p, c, i) => (c === Math.max(...arr) ? p + String.fromCharCode(65 + i) : p), '');
  console.log(answer.length === 1 ? answer[0] : '?');
}

solution('./input.txt');
