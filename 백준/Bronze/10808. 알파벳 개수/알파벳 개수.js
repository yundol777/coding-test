const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

string = input[0].split("");

solution(string);

function solution(string) {
  let result = "";
  for (let i = 0; i < 26; i++) {
    let count = 0;
    count = countChar(string, String.fromCharCode(i + 97));
    result = result + count + " ";
  }
  console.log(result);
}

function countChar(string, findchar) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === findchar) {
      count++;
    }
  }
  return count;
}