/**
 * The peak element is the element that is strictly greater than its neighbors.
 * If an array contains multiple peak elements, return the index of any of the peak elements.
 * For example: [1,2,3,1]
 * Output: 2
 */

/**
 * 1st Approach: Find the largest element in an array as Largest element is always the peak
 * Time Complexity O(N);
 *
 * 2nd Approach: Use the binary search with 2 pointer approach
 * Find the mid, if mid index is "0" then check if mid+1 element is less than mid
 * Similarly if mid index is last element then check if mid-1 is less than mid
 * if mid index is neither first or last index then check the element is
 * greater than its peers on side.
 * If condition fails then move to either side accordingly
 * Time Complexity O(logN)
 * @param {*} nums
 * @returns
 */

function findPeakElement(nums = []) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if ((mid === 0 || nums[mid] > nums[mid - 1]) && (mid === nums.length - 1 || nums[mid] > nums[mid + 1])) return mid;
    else if (nums[mid + 1] > nums[mid]) left = mid + 1;
    else right = mid;
  }
  return 0;
}

console.log(findPeakElement([2, 7, 9, 0, 4, 10]));
