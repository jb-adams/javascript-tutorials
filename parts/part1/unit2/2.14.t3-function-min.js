"use strict";

function getMinimum(a,b) {
  let ret;

  if (a < b) {
    ret = a;
  } else if (b < a) {
    ret = b
  }

  return ret;
}

let userA;
let userB;
let userMin;

userA = Number(prompt("Enter number A:"));
userB = Number(prompt("Enter number B:"));

userMin = getMinimum(userA,userB);

alert(`Minimum number is: ${userMin}`);
