function truncate(str, maxlength) {
  let retStr = str;

  if (str.length > maxlength) {
    retStr = str.slice(0,maxlength-1) + "...";
  }

  alert(retStr);
}

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);
