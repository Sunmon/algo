const fs = require('fs');
const fsPromises = require('fs/promises');

/**
 * @param {string} dir 읽을 파일 경로
 * @return {string} line 파일에서 순차적으로 한 줄씩 읽은 것
 * @example
 *  const reader = exports.lineReader('/dev/stdin') // 콘솔에서 입력
 *  const reader = exports.lineReader("input.txt"); // 파일에서 입력
    console.log(reader()); // 한줄씩 읽어온다
 */
exports.lineReader = (dir) => {
//   const file = fs.readFileSync(0, 'utf8')
  // .trimEnd()
  // .split('\n');
  const file = fs.readFileSync(dir, 'utf8').toString().split('\n');
  let line = 0;
  return () => file[line++];
};

/**
 * @usage 파일 내용을 통째로 읽어 배열에 담아 리턴한다.
 * @param {string} dir 읽을 파일 경루
 * @return {arrray[string]} 파일의 한 문장씩을 담은 문자열 배열
 */
exports.inputByFile = async (dir) => {
  const file = await fsPromises.readFile(dir, 'utf-8');
  return file.toString().split('\n'); // window & mac
};
