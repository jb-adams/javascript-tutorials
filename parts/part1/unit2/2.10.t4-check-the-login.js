"use strict";

let userName;
let password;

let userNameMessage;
let passwordMessage;

userName = prompt("Who's there?");

if (userName == "Admin") {

  password = prompt("Password?");

  if (password == "TheMaster") {
    passwordMessage = "Welcome!";
  } else if (password == null) {
    passwordMessage = "Canceled.";
  } else {
    passwordMessage = "Wrong password";
  }

  alert(passwordMessage);

} else {

  if (userName == null) {
    userNameMessage = "Canceled.";
  } else {
    userNameMessage = "I don't know you";
  }

  alert(userNameMessage);

}
