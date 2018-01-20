function shuffle(arr) {
  function shufCompare(a,b) {
    let rndInt = Math.round(Math.random() * 2) - 1;
    return rndInt;
  }

  arr.sort(shufCompare);
}

let arr = [1, 2, 3];

alert(arr);
shuffle(arr);
alert(arr);
shuffle(arr);
alert(arr);
shuffle(arr);
alert(arr);
