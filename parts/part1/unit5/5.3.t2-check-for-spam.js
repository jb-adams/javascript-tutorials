function checkSpam(str) {
  let lcStr = str.toLowerCase();
  let spamFound = false;

  if (lcStr.includes("viagra")) {
    spamFound = true;
  } else if (lcStr.includes("xxx")) {
    spamFound = true;
  }

  return spamFound;
}

for (let i=0; i<5; i++) {
  let str = prompt("enter string that might have spam");
  alert(checkSpam(str));
}
