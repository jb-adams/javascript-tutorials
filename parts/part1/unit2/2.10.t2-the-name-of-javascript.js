"use strict";

let promptResult;
let answer;

promptResult = prompt(`What's the "official" of Javascript?`);

if (promptResult === "ECMAScript") {
  answer = "Right!";
} else {
  answer = "You don't know? 'ECMAScript!'";
}

alert(answer);
