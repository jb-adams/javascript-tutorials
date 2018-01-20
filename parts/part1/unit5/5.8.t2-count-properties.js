function count(obj) {
  let count = Object.entries(obj).length;
  return count;
}

let user = {
  name: "John",
  age: 30
};

alert(count(user));
