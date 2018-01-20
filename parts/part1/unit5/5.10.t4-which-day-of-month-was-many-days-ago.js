function getDateAgo(date, days) {
  //alert(date.getFullYear());
  ago = new Date(date.getFullYear(), date.getMonth(), date.getDate()-days);
  return ago
}

let date = new Date(2015, 0, 2);
alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));
