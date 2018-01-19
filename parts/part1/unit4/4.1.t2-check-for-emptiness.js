function isEmpty(obj) {
  let val = 0;
  let ret = false;

  for (key in obj) {
    val += 1;
  }

  if (val == 0) ret = true;

  return ret;
}

let schedule = {};
alert(isEmpty(schedule));

schedule["8:30"] = "get up";
alert(isEmpty(schedule));
