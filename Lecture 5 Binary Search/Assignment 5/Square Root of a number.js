/**
 * The approach is to use a binary search O(log N),
 * Assuming that square root of a number lies b/w 0 & number
 * Find the middle, if square of middle is greater than number
 * then ignore the right side (else case)
 * If square of mid is less than the number then it could be a
 * nearest square root
 * @param num
 * @returns
 */

function findPerfectSquare(num = 0) {
  if (num > 0) {
    let left = 0;
    let right = num;
    let probableSqrt = 0;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      const midSquare = mid * mid;
      if (num === midSquare) return mid;
      else if (midSquare < num) {
        probableSqrt = mid;
        left = mid + 1;
      } else right = mid;
    }
    return probableSqrt;
  }
}

console.log(findPerfectSquare(125));
