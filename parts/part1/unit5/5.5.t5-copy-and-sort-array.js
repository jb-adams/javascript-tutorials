function copySorted(arr) {
  let newArr = [];

  for (let i=0; i<arr.length; i++) {
    newArr.push(arr[i]);
  }

  newArr.sort();
  return newArr;

}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert(sorted);
alert(arr);
