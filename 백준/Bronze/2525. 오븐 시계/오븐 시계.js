const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const currentTime = input[0].split(" ").map((time) => +time);
const cookingTime = parseInt(input[1]);

solution(currentTime, cookingTime);

function solution(currentTime, cookingTime) {
  let time = currentTime[0];
  let minuate = currentTime[1];

  minuate += cookingTime;

  while (60 <= minuate) {
    time++;
    minuate -= 60;
  }

  if (24 <= time) {
    time -= 24;
  }

  console.log(time, minuate);
}