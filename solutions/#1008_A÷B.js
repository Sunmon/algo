const fs = require('fs');

const readFile = (dir) => {
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

function solution() {
  let line;
  const reader = readFile('./input.txt');
  let answer = 0;
  while (line = reader()) {
    const [a, b] = line.split(' ');
    answer = +a / b;
  }
  console.log(answer);
}

solution();
