function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1,str.length);
}

for (let i=0; i<5; i++) {
  let lc = prompt("enter lowercase word");
  alert(ucFirst(lc));
}
