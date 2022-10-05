function solution() {
  const utc = new Date().getTime();
  const today = new Date(utc + 9 * 60 * 60 * 1000);
  const padding = (num) => num.toString().padStart(2, 0);
  console.log(`${today.getFullYear()}-${padding(today.getMonth() + 1)}-${padding(today.getDate())}`);
}

solution();
