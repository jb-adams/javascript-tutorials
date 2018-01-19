/* BAD STYLE EXAMPLE FIRST */
/*
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
*/

/* BELOW IS THE REVISED, GOOD CODING STYLE OF THE ABOVE CODE BLOCK */

function pow(x , n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?" , "");
let n = prompt("n?" , "");

if (n <= 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero.`);
} else {
  alert( pow(x , n) );
}
