"use strict";

function checkAge(age) {
  return (age > 18) ? true : confirm("Do you have your parents' permission to access this page?");
}

let userAge;
userAge = Number(prompt("What is your age?"));
checkAge(userAge);
