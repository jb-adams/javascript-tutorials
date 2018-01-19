function Calculator() {
  this.read = function() {
    this.valA = parseInt(prompt("What is Value A?"));
    this.valB = parseInt(prompt("What is Value B?"));
  };
  this.sum = function() {
    return this.valA + this.valB;
  }
  this.mul = function() {
    return this.valA * this.valB;
  }
};

let calculator = new Calculator();
calculator.read();

alert(`Sum=${calculator.sum()}`);
alert(`Mul=${calculator.mul()}`);
