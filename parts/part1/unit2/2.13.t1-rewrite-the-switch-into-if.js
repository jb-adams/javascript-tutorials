"use strict";

let browser;
let message;

browser = prompt("What browser are you using?");

if (browser == "Edge") {
  message = "You've got the Edge!";
} else if (browser == "Chrome"
  || browser == "Firefox"
  || browser == "Safari"
  || browser == "Opera") {
    message = "Okay we support these browsers too";
} else {
  message = "We hope that this page looks ok!";
}

alert(message);
