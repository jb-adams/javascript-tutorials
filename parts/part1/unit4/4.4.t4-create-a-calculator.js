let calculator = {
  read: function() {
    this.valA = parseInt(prompt("What is value A?"));
    this.valB = parseInt(prompt("What is value B?"));
  },
  sum: function() {
    let newVal = this.valA + this.valB;
    return newVal;
  },
  mul: function() {
    let newVal = this.valA * this.valB;
    return newVal;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
