const fsPromises = require('fs/promises');

const readFile = async (dir) => {
  const file = await fsPromises.readFile(dir, 'utf-8');
  return file.toString().split('\n'); // window & mac
};

async function solution(src) {
  const reader = await (await readFile(src)).map(Number);
  const num = (reader[0] * reader[1] * reader[2]).toString();
  const arr = Array(10).fill(0);
  for (let i = 0; i < num.length; i++) {
    arr[+num[i]]++;
  }

  console.log(arr.join('\n'));
}

// solution('/dev/stdin');
solution('./input.txt');
