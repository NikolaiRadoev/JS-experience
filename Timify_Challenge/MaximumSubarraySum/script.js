function maxSequence(nums) {
  let maxSum = -Infinity;
  let currentSum = 0;
  if (nums.every((n) => n < 0)) {
    console.log(0);
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    console.log(`current sum ${currentSum}`);
    maxSum = Math.max(currentSum, maxSum);
    console.log(`max sum ${maxSum}`);
  }
  console.log(maxSum);
  return maxSum;
}

maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]);
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
