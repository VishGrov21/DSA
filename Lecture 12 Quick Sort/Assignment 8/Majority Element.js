/**
 * Problem Statement:
 * Given array nums of size n, return the majority element present in the array.
 * Assume that the majority element always exists in an array.
 * For example:
 * Nums = [2, 2, 1, 1, 1, 2, ,2]
 * Output: 2
 */

/**
 * Approach: store the frequency of the element in the object
 * Update the max element & max element count is updated on every iteration
 *
 * Time Complexity O(N)
 * Space Complexity O(N)
 * @param arr
 * @returns
 */

function findMajorityElement(arr = []) {
  if (arr.length < 1) return -1;
  const eleFreq = {};
  let maxElement = 0;
  let maxElementCount = 0;
  arr.forEach((ele) => {
    eleFreq[ele] = eleFreq[ele] + 1 || 1;
    if (eleFreq[ele] > maxElementCount) {
      maxElementCount = eleFreq[ele];
      maxElement = ele;
    }
  });
  return maxElement;
}

const arr = [2, 2, 1, 1, 1, 2, 1, 2, 2];
console.log(findMajorityElement(arr));
