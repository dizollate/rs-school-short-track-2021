/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const copy = str.split('');
  const empt = [];
  for (let i = 0; copy.length > i; i++) {
    let n = 2;
    for (let j = i + 1; copy.length > j - 1; j++) {
      if (copy[i] === copy[j]) {
        copy[j] = `${n}${copy[j]}`;
        n += 1;
      } else {
        empt.push(copy[j - 1]);
        j += 10;
        i += n - 2;
      }
    }
  }
  return empt.join('');
}

module.exports = encodeLine;
