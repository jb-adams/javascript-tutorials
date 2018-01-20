function sumInput() {
  let arr = [];
  let val;
  let sum = 0;
  let mybool = true;

  while (mybool) {
    val = prompt("Enter a number, or a non-number to end the loop");

    if (val === "" || val === null || !isFinite(val)) {
      mybool = false;
    } else {
      arr.push(parseInt(val));
    }
  }

  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }

  return sum
}

alert( sumInput() );
