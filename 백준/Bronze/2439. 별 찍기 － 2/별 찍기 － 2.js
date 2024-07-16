const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = parseInt(input[0]);

solution(input);

function solution(num) {
  let star = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i + j >= num - 1) star += "*";
      else star += " ";
    }
    if (i === num) break;
    star += "\n";
  }
  console.log(star);
}