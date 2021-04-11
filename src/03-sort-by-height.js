/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const empt = [];
  for (let i = 0; arr.length > i; i++) {
    if (arr[i] !== -1) { empt.push(arr[i]); }
  }
  empt.sort((a, b) => a - b);
  for (let i = 0, j = 0; arr.length > i; i++) {
    if (arr[i] !== -1) {
      arr.splice(i, 0, empt[j]);
      j += 1;
      arr.splice(i + 1, 1);
    }
  }
  return arr;
}

module.exports = sortByHeight;
