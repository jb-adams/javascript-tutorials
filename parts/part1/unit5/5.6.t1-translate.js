function camelize(str) {
  let arr = str.split("-");
  let camel = arr[0];

  for (let i=1; i<arr.length; i++) {
      subCamel = arr[i][0].toUpperCase() + arr[i].slice(1);
      camel = camel + subCamel;
  }

  return(camel);
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));
