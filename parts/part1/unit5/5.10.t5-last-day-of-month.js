function getLastDayOfMonth(year, month) {
  let date = new Date(year, month+1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2017,0));
alert(getLastDayOfMonth(2012,1));
alert(getLastDayOfMonth(2017,3));
