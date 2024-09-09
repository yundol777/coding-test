const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const Nums = input[0].split(" ").map((score) => +score);

solution(Nums);

function solution(num) {
  const A = num[0];
  const B = num[1];

  console.log(A / B);
}