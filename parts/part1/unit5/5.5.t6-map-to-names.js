function mapName(item, index, array) {
  return item.name;
};
function mapAge(item, index, array) {
  return item.age;
}

let john = { name: "John", age: 25};
let pete = { name: "Pete", age: 30};
let mary = { name: "Mary", age: 28};

let users = [john, pete, mary];
alert(users.map(mapName));
alert(users.map(mapAge));
