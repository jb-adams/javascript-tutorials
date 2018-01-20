function getSecondsToTomorrow() {
  let now = new Date();
  let tmr = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  let diff = tmr - now;
  let sec = Math.round(diff / 1000);
  return sec;
}

alert(getSecondsToTomorrow());
