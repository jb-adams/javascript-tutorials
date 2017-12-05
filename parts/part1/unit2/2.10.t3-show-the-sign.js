"use strict";

let promptResult;
let answer;

promptResult = Number(prompt("Enter a number:"));

if (promptResult > 0) {
  answer = 1;
} else if (promptResult == 0) {
  answer = 0;
} else if (promptResult < 1) {
  answer = -1;
}

alert(String(answer));
