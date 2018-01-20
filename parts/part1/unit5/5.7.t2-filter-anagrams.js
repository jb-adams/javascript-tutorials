function aclean(arr) {
  let newMap = new Map();
  let newArr = [];

  arr.forEach((elem, idx, array) => {
    let anagram = elem.split('').sort().join('').toLowerCase();
    newMap.set(anagram, elem);
  });

  for (let val of newMap.values()) {
    newArr.push(val);
  };
  return newArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr));
