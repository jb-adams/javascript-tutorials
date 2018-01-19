function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {
    let str_s = str.split(" ");
    let valA = parseInt(str_s[0]);
    let op = str_s[1];
    let valB = parseInt(str_s[2]);

    let newVal = this.methods[op](valA,valB);
    return newVal;
  }

  this.addOperator = function(name, func) {
    this.methods[name] = func;
  }
};

let calc = new Calculator();
calc.addOperator("*", (a, b) => a * b);
calc.addOperator("/", (a, b) => a / b);
calc.addOperator("**", (a, b) => a ** b);

alert(calc.calculate("10 + 20"));
alert(calc.calculate("10 - 20"));
alert(calc.calculate("10 * 20"));
alert(calc.calculate("10 / 20"));
alert(calc.calculate("2 ** 5"));
