function getAverageAge(users) {
  let sum = 0;
  let avg;

  for (let i=0; i<users.length; i++) {
    sum += users[i].age;
  }

  avg = sum / users.length;
  return avg;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary];
alert(getAverageAge(arr));
