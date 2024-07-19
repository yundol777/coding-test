const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const Num1 = parseInt(input[0]);
const Num2 = input[1].split("").reverse();

solution(Num1, Num2);

function solution(Num1, Num2) {
  let proNum = 0;
  let result = 0;
  for (let i = 0; i < 3; i++) {
    proNum = Num1 * Num2[i];
    console.log(proNum);
    result += proNum * 10 ** i;
  }

  console.log(result);
}