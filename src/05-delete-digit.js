/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('').map(Number);
  const sorting = [];
  for (let i = 0; arr.length > i; i++) {
    sorting.push(arr[i]);
  }
  arr.sort((a, b) => a - b);
  sorting.splice(sorting.indexOf(arr[0]), 1);
  const finish = sorting.join('');
  const val = Number.parseInt(finish, 10);
  return val;
}

module.exports = deleteDigit;
