let midindex;
let styles = ["Jazz", "Blues"];

alert(styles);

styles.push("Rock-n-Roll");
alert(styles);

midindex = Math.floor(styles.length / 2);
styles[midindex] = "Classics";
alert(styles);

alert(styles.shift());

styles.unshift("Rap");
styles.unshift("Reggae");
alert(styles);
