const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const X = parseInt(input[0]);
const N = parseInt(input[1]);
const detail = [];
for (let i = 2; i < N + 2; i++) {
  const inputDetail = input[i].split(" ").map((item) => +item);
  const testCase = {
    a: inputDetail[0],
    b: inputDetail[1],
  };
  detail.push(testCase);
}

solution(X, N, detail);

function solution(X, N, detail) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += detail[i].a * detail[i].b;
  }

  if (sum === X) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}