/**
 * The approach is to use a binary search,
 * For perfect square, the square root would lie between 0 & number
 * Determine, the mid, if square of mid is equal to the number then
 * that number is perfect square else
 * If the number is greater then discard the right side
 * Move the right pointer to mid
 * else move the left pointer to mid+1
 * @param num
 * @returns
 */

function findPerfectSquare(num = 0) {
  if (num > 0) {
    let left = 0;
    let right = num;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      const midSquare = mid * mid;
      if (num === midSquare) return true;
      else if (midSquare < num) left = mid + 1;
      else right = mid;
    }
    return false;
  }
}

console.log(findPerfectSquare(6));
