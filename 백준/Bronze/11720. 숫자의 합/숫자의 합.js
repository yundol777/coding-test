const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const count = parseInt(input[0]);
const nums = input[1].split("");

solution(count, nums);

function solution(count, nums) {
  let sum = 0;
  nums.map((num) => (sum += parseInt(num)));
  console.log(sum);
}