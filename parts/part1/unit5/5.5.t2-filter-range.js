function filterRange(arr, a, b) {
  let filterArr = []

  for (let i=0; i<arr.length; i++) {
    let val = arr[i];
    if (val >= a && val <= b) {
      filterArr.push(val)
    }
  }

  return filterArr;
}

let arr = [5,3,8,1,10,2,2,9,0];
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);
