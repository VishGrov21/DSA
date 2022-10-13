/**
 * Problem Statement:
 * Given array nums with n objects colored red, white, or blue, sort them in place so that the
 * objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * Solve this question without using the library sort function.
 * For example: Nums = [2,0,2,1,1,0], Result = [0,0,1,1,2,2]
 */

/**
 * 1st Approach: Store the frequency of the 0's, 1's & 2's in an object
 * Fill the elements sequentially based on the frequency within the same array
 * Time complexity will be O(N)
 * @param {*} colorsArr
 * @returns
 */
function sortColors(colorsArr = []) {
  const colorsFreqObj = {};

  colorsArr.forEach((ele) => {
    if (ele === 0) colorsFreqObj[0] = colorsFreqObj[0] + 1 || 1;
    else if (ele === 1) colorsFreqObj[1] = colorsFreqObj[1] + 1 || 1;
    else if (ele === 2) colorsFreqObj[2] = colorsFreqObj[2] + 1 || 1;
  });
  let prevIndex = 0;

  for (const [key, value] of Object.entries(colorsFreqObj)) {
    // Key value is "0", "1" & "2", it is multiplied with 1 for numeric value
    colorsArr.fill(key * 1, prevIndex, prevIndex + value);
    prevIndex += value;
  }

  return colorsArr;
}

/**
 * 2nd Approach: Take 3 pointers, viz., left, right & moving pointer
 * move the moving pointer from left to right.
 * If element is zero then swap with left, if element is 1 then swap with right
 * else increment
 * Time complexity will be O(N)
 * @param {*} colorsArr
 * @returns
 */
function sortColors1(colorsArr = []) {
  if (colorsArr.length < 1) return arr;
  let left = 0;
  let right = colorsArr.length - 1;
  let movingPointer = left;

  while (movingPointer <= right) {
    if (colorsArr[movingPointer] < 1) {
      [colorsArr[left], colorsArr[movingPointer]] = [colorsArr[movingPointer], colorsArr[left]];
      left++;
      movingPointer++;
    } else if (colorsArr[movingPointer] > 1) {
      [colorsArr[right], colorsArr[movingPointer]] = [colorsArr[movingPointer], colorsArr[right]];
      right--;
    } else {
      movingPointer++;
    }
  }

  return colorsArr;
}

console.log(sortColors1([2, 0, 1, 2, 0, 2, 1, 1, 1, 1, 0, 0, 1]));
