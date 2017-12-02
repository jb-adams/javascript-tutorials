"use strict";

let a = 1, b = 1;

let c = ++a; //my answer a=2, b=1, c=2 -> CORRECT
alert(`a=${a}\nb=${b}\nc=${c}`)

let d = b++; //my answer a=2, b=2, c=2, d=1 -> CORRECT
alert(`a=${a}\nb=${b}\nc=${c}\nd=${d}`)
