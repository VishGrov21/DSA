/**
 * The approach is to use an Binary Search O(log N);
 * Approach: Determine the mid, if mid is equal to ele
 * then we will discard right side & consider left side
 * & see if we have more earlier index available
 *
 * If mid is not equal to ele then compare with element if mid
 * less than ele then discard left side (left = mid+1)
 * else discard right side (right = mid-1)
 * @param array
 * @param ele
 * @returns
 */

function firstOccurenceInAnSortedArray(array = [], ele = 0) {
  if (array.length > 0) {
    let left = 0;
    let right = array.length - 1;
    let index = -1;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (array[mid] === ele) {
        index = mid;
        right = mid;
      } else if (array[mid] < ele) {
        left = mid + 1;
      } else right = mid - 1;
    }
    return index;
  }
}

console.log(firstOccurenceInAnSortedArray([0, 0, 0, 0, 1, 1, 1, 1, 1], 1));
