"use strict";

let age;
let result;

age = Number(prompt("what is your age?"));

if (age >= 14 && age <= 90) {
  result = "Inside the range";
} else {
  result = "Outside the range";
}

alert(result);
