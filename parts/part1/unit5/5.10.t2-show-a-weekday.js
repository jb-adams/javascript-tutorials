function getWeekDay(date) {
  let weekdayArr = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return weekdayArr[date.getDay()];
}

let date = new Date(2012, 0, 3);
alert(getWeekDay(date));
