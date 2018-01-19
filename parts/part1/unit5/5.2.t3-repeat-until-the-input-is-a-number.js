function readNumber() {
  let notFinished = true;
  let value;

  do {
    value = prompt("Enter a valid number");
  } while (!isFinite(value));

  if (num === null || num === '') return null;

  return +num 

}

readNumber();
