/**
 * Problem Statement:
 * Given an integer array nums and an integer k, return the
 * kth largest element present in an array.
 * For example:
 * arr = [40, 25, 68, 79, 52, 66, 89,91, 97], k = 2
 * result = 89
 */

function helper(arr = [], startIndex, endIndex) {
  if (arr.length < 1) return arr;
  let pivotIndex = startIndex;
  let index = pivotIndex;
  for (let movingPointer = startIndex + 1; movingPointer < endIndex; movingPointer++) {
    if (arr[movingPointer] < arr[pivotIndex]) {
      index++;
      [arr[movingPointer], arr[pivotIndex]] = [arr[pivotIndex], arr[movingPointer]];
    }
  }
  [arr[pivotIndex], arr[index]] = [arr[index], arr[pivotIndex]];
  return index;
}

/**
 * There are 2 approaches,
 * 1st Approach is to use in-built sorting method, which would sort the array
 * then  Kth element lies at the (k-1)th Position -> O(N logN) time complexity.
 *
 * 2nd Approach is to use Quick Sort Algorithm which uses Partition Algorithm
 * The Partition algorithm would take an element, place it at right position in the array
 * & provide its index, if(k-1)=== pivotIndex then we would the Kth Largest
 * else we need to navigate to left or right subArray accordingly.
 * Best case as Theta (N) & worst case as O(N^2)
 * @param arr
 * @param k
 * @param startIndex
 * @param endIndex
 * @returns
 */
function KthLargest(arr = [], k, startIndex, endIndex) {
  const largestEleIndex = arr.length - k;
  if (arr.length < 1 || largestEleIndex < 0 || largestEleIndex >= arr.length - 1) return arr;
  const pivotIndex = helper(arr, startIndex, endIndex);
  if (pivotIndex === largestEleIndex) return arr[pivotIndex];
  else if (pivotIndex < largestEleIndex) return KthLargest(arr, k, pivotIndex + 1, endIndex);
  else return KthLargest(arr, k, startIndex, pivotIndex);
}
const array = [40, 25, 68, 79, 52, 66, 89, 91, 97];
console.log(KthLargest(array, 6, 0, array.length - 1));
