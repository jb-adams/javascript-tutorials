"use strict";

let age;
let response;

age = Number(prompt("What is your age?"));

if (!(age >= 14 && age <=90)) {
  response = "Outside range";
} else {
  response = "Inside range";
}

alert(response);
