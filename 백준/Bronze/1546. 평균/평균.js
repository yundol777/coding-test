const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const count = parseInt(input[0]);
const currentScore = input[1].split(" ").map((score) => +score);

solution(count, currentScore);

function solution(count, currentScore) {
  const M = Math.max(...currentScore);
  let sum = 0;
  currentScore.map((score) => {
    sum = sum + (score / M) * 100;
    return (score / M) * 100;
  });

  console.log(sum / count);
}