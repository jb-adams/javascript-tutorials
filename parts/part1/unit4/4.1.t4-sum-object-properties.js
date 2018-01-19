function sumObjectProperties(obj) {
  let val = 0;

  for (key in obj) {
    val += obj[key]
  }

  return val;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

alert(sumObjectProperties(salaries));
