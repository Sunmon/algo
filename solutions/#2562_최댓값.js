const fsPromises = require('fs/promises');

const readFile = async (dir) => {
  const file = await fsPromises.readFile(dir, 'utf-8');
  return file.toString().split('\n'); // window & mac
};

async function solution(src) {
  const reader = await (await readFile(src)).map(Number);
  const max = Math.max(...reader);
  console.log(`${max}\n${reader.indexOf(max) + 1}`);
}

solution('/dev/stdin');
// solution('./input.txt');
