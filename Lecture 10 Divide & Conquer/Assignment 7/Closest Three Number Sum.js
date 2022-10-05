/**
 * The closest 3 number sum could be solved in 2 ways,
 * 1. Brute Force - using 3 loops - O(N^3) as time complexity
 * 2. Sorting [O(N * log N)] & 2 pointer approach with 2 loops - O(N^2)
 *    resulting in O(N^2) as time complexity
 * Below approach is the second one (the optimal one)
 * @param arr
 * @param target
 * @returns
 */
function closestThreeNumberSum(arr = [], target = 0) {
  if (arr.length > 0) {
    arr.sort((ele1, ele2) => ele1 - ele2);
    let closestTarget = Infinity;
    let iterationSum = 0;
    for (let index = 1; index < arr.length; index++) {
      // For every index, reset the pointer values
      let leftPointer = 0;
      let rightPointer = arr.length - 1;
      while (leftPointer < rightPointer) {
        // check if left & right pointers aren't same as index
        // we need all the 3 pointers to be distinct
        if (leftPointer !== index && index !== rightPointer) {
          iterationSum = arr[leftPointer] + arr[index] + arr[rightPointer];
          if (iterationSum === target) return target;
          // below condition would check if currentSum is closest to the target
          else if (Math.abs(target - closestTarget) > Math.abs(target - iterationSum)) closestTarget = iterationSum;
        }
        // If the sum in current iteration is less than the target -or-
        // leftPointer is same as index then increment the leftPointer
        if (iterationSum < target || leftPointer === index) leftPointer++;
        else if (iterationSum > target || rightPointer === index) rightPointer--;
      }
    }
    return closestTarget;
  }
}

const array = [-1, 2, 1, -4];
const target = 1;

const array2 = [
  -43, 57, -71, 47, 3, 30, -85, 6, 60, -59, 0, -46, -40, -73, 53, 68, -82, -54, 88, 73, 20, -89, -22, 39, 55, -26, 95,
  -87, -57, -86, 28, -37, 43, -27, -24, -88, -35, 82, -3, 39, -85, -46, 37, 45, -24, 35, -49, -27, -96, 89, 87, -62, 85,
  -44, 64, 78, 14, 59, -55, -10, 0, 98, 50, -75, 11, 97, -72, 85, -68, -76, 44, -12, 76, 76, 8, -75, -64, -57, 29, -24,
  27, -3, -45, -87, 48, 10, -13, 17, 94, -85, 11, -42, -98, 89, 97, -66, 66, 88, -89, 90, -68, -62, -21, 2, 37, -15,
  -13, -24, -23, 3, -58, -9, -71, 0, 37, -28, 22, 52, -34, 24, -8, -20, 29, -98, 55, 4, 36, -3, -9, 98, -26, 17, 82, 23,
  56, 54, 53, 51, -50, 0, -15, -50, 84, -90, 90, 72, -46, -96, -56, -76, -32, -8, -69, -32, -41, -56, 69, -40, -25, -44,
  49, -62, 36, -55, 41, 36, -60, 90, 37, 13, 87, 66, -40, 40, -35, -11, 31, -45, -62, 92, 96, 8, -4, -50, 87, -17, -64,
  95, -89, 68, -51, -40, -85, 15, 50, -15, 0, -67, -55, 45, 11, -80, -45, -10, -8, 90, -23, -41, 80, 19, 29, 7,
];
const target2 = 255;
console.log(`Closest Three Number sum is ${closestThreeNumberSum(array2, target2)}`);
