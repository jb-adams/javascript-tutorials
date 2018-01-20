function getSecondsToday() {
  let now = new Date();
  let beg = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
  let diff = now - beg;
  return Math.round(diff / 1000);

}

alert(getSecondsToday());
