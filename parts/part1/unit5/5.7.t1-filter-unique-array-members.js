function unique(arr) {
  let set = new Set();
  let newArr = [];

  for (let i=0; i<arr.length; i++) {
    set.add(arr[i]);
  }

  set.forEach((value, valueAgain, set) => {
    newArr.push(value);
  });

  return newArr;
}

let values = [
  "Hare","Krishna","Hare","Krishna",
  "Krishna","Krishna","Hare","Hare",":-0"
];
alert(values);
alert(unique(values));
