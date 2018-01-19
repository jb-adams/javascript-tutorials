function random(min, max) {
  let range = max - min;
  let toadd = Math.random() * range;
  let value = min + toadd;

  return value;
}

for (let i = 0; i < 5; i++) {
  let min = +prompt("Enter min:");
  let max = +prompt("Enter max:");
  alert(random(min,max));
}
