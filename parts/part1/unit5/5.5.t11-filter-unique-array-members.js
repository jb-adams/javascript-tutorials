function unique(arr) {
  let newArr = [];

  for (let i=0; i<arr.length; i++) {
    if (! newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

let strings = [
  "Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare",
  ":-0"
]

alert(unique(strings));
