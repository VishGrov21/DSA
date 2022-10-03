/**
 * If an array with 6 numeric values, denoting the co-ordinates
 * in a graph, to determine, if they are collinear, then
 * determine the area of the co-ordinates.
 * If the area is 0, then the co-ordinates are in a straight line
 * Else they can form a triangle & they aren't in straight line
 *
 *
 * The below approach uses a simple formula, so the time complexity
 * is O(1)
 * @param axisCordinatesArr
 * @returns
 */

function threePointsAreCollinear(axisCordinatesArr = []) {
  if (axisCordinatesArr.length === 6) {
    const [x1, y1, x2, y2, x3, y3] = axisCordinatesArr;
    const areaOfRectangle = x1 * [y2 - y3] + x2 * [y3 - y1] + x3 * [y1 - y2];
    if (areaOfRectangle === 0) {
      return "YES";
    }
  }
  return "NO";
}
const coOrdinates = [1, 1, 1, 6, 0, 9];
console.log(threePointsAreCollinear(coOrdinates));
