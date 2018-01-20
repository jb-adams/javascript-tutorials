function topSalary(salaries) {
  let top = null;

  for (value of Object.entries(salaries)) {
    let [name, salary] = value;
    top = Math.max(top,salary);
  }

  return top;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

alert(topSalary(salaries));
