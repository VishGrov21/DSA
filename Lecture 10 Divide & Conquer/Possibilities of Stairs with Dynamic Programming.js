let stairsMap = {
  0: 1,
  1: 1,
  2: 2,
};
function findNStairWays(stairsCount = 1) {
  if (stairsMap[stairsCount]) return stairsMap[stairsCount];
  const val = findNStairWays(stairsCount - 1) + findNStairWays(stairsCount - 2);
  stairsMap[stairsCount] = val;
  return val;
}

console.log(`No. of ways to reach the stairs - ${findNStairWays(12)}`);
