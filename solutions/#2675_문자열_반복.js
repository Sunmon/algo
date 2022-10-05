const fs = require('fs');

const readFile = (dir) => {
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

function solution(src) {
  const reader = readFile(src);
  const n = reader();
  let line;
  let answer = '';
  while (line = reader()) {
    const [k, str] = line.split(' ');
    answer += `${[...str].map((i) => i.repeat(k)).join('')}\n`;
  }
  console.log(answer);
}

solution('/dev/stdin');
// solution('./input.txt');
