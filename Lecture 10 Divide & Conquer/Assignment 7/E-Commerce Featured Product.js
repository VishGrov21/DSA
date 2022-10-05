/**
 * Time complexity of the solution would be O(N log N)
 * because we are using a inbuilt sort & three loops sequentially
 *
 * @param arr
 * @returns
 */
function featuredProduct(arr = []) {
  if (arr.length > 0) {
    // Sort the array at the beginning because we need
    // the alphabetically last element at the end
    arr.sort();
    // Using Map class for Product Counter instead of plain JS Object
    // because Map would store order of the elements
    const productCounter = new Map();
    arr.forEach((ele) => {
      if (!productCounter[ele]) productCounter[ele] = 0;
      productCounter[ele] += 1;
    });
    // Retrieve the max value
    let maxCount = 0;
    for (let values of Object.values(productCounter)) {
      if (values > maxCount) maxCount = values;
    }
    const maxProductArray = [];
    for (let [key, values] of Object.entries(productCounter)) {
      if (values === maxCount) maxProductArray.push(key);
    }
    // If there's only one max value, then that would be popped
    // If there's more than one then the last entry would be popped
    return maxProductArray.pop();
  }
}

const array = [
  "yellowShirt",
  "redHat",
  "blackShirt",
  "bluePants",
  "redHat",
  "pinkHat",
  "blackShirt",
  "yellowShirt",
  "greenPants",
  "greenPants",
  "greenPants",
];

console.log(featuredProduct(array));
