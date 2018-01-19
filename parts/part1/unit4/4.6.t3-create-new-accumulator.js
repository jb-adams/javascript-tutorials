function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    let newValue = parseInt(prompt("What is the new value to add?"));
    this.value += newValue;
  }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
