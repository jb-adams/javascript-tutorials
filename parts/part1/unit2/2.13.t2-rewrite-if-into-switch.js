"use strict";

let a;
let m;

a = Number(prompt('a?'));


switch (a) {
  case 0:
    m=0;
    break;
  case 1:
    m=1;
    break;
  case 2:
  case 3:
    m="2,3";
    break;
}

alert(m);
