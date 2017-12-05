"use strict";

let n = 20;

outer: for (let o=2; o<= n; o++) {
  let check = true;

  inner: for (let i=2; i<o; i++) {
    if (o % i == 0) check = false;
  }

  if (check) alert(`${o} is a prime number`);

}
