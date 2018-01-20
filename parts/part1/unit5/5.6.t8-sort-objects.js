function sortByName(users) {
  function compareName(a, b) {
    if (a.name > b.name) return 1;
    if (a.name == b.name) return 0;
    if (a.name < b.name) return -1;
  }

  users.sort(compareName)
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [mary, pete, john];
sortByName(arr);
alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);
