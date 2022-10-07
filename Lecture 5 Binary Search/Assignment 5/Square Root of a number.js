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
function findSquareRoot(num = 0) {
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

/**
 * First find the nearest square root using above utility
 * Consider each precision is division of 10 -> 0.01 as 1/100
 *
 * Solution would require two for loops, first for loop
 * to determine the factor precision & second for loop
 * to add the solution to the increment of the precision
 *
 * O(precision ^ 10)
 * @param num
 * @param precision
 * @returns
 */
function findSquareRootWithPrecision(num = 0, precision = 0) {
  let solution = findSquareRoot(num);
  let factor = 1;
  let sqrtPrecision = solution;
  for (let index = 0; index < precision; index++) {
    factor /= 10;
    for (let j = solution; j * j <= num; j += factor) {
      sqrtPrecision = j;
    }
  }
  return sqrtPrecision.toFixed(precision);
}

console.log(findSquareRoot(125));

console.log(findSquareRootWithPrecision(39, 3));
