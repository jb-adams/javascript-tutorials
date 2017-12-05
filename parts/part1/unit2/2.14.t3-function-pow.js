"use strict";

function getPower(a,b) {
  let ret = a;

  for (let i=1; i<b; i++) {
    ret *= a;
  }

  return ret;

}

let userA;
let userB;
let userPow;

userA = Number(prompt("Enter Number A:"));
userB = Number(prompt("Enter Number B:"));
userPow = getPower(userA,userB);

alert(`Power is: ${userPow}`);
