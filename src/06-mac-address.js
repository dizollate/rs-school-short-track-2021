/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const mac = n.split('');
  if (mac[0] !== '0' && mac[0] !== '1' && mac[0] !== '2' && mac[0] !== '3' && mac[0] !== '4' && mac[0] !== '5' && mac[0] !== '6' && mac[0] !== '7' && mac[0] !== '8' && mac[0] !== '9' && mac[0] !== 'A' && mac[0] !== 'B' && mac[0] !== 'C' && mac[0] !== 'D' && mac[0] !== 'F' && mac[0] !== 'E') {
    return false;
  }
  return true;
}

module.exports = isMAC48Address;
