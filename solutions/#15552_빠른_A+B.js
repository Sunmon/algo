const fs = require('fs');

const readFile = (dir) => {
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

function solution() {
  const reader = readFile('./input.txt');
  let t = reader();
  let answer = '';
  while (t--) {
    const line = reader();
    const [a, b] = line.split(' ');
    answer += `${+a + +b}\n`;
  }
  console.log(answer);
}
asdfZzZz
solution();
