function getMaxSubSum(arr) {
  let highestSum = 0;
  let currentSum = 0;

  for (let i=0; i<arr.length; i++) {
    let val = arr[i];
    currentSum += val;
    highestSum = Math.max(highestSum, currentSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return highestSum;
}

alert(getMaxSubSum([-1,2,3,-9]));
alert(getMaxSubSum([2,-1,2,3,-9]));
alert(getMaxSubSum([-1,2,3,-9,11]));
alert(getMaxSubSum([-2,-1,1,2]));
alert(getMaxSubSum([100,-9,2,-3,5]));
alert(getMaxSubSum([1,2,3]));
