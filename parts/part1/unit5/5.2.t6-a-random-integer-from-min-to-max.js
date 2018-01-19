function randomInteger(min, max) {
  let range = max - min;
  let newNum = min + Math.round(Math.random() * range)

  return newNum;
}

for (let i=0; i<5; i++) {
  let min = +prompt("enter min");
  let max = +prompt("enter max");

  alert(randomInteger(min,max));
}
