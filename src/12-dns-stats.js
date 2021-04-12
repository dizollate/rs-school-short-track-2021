/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const domainsIn = domains[i];
    const domainStr = domainsIn.split('.').reverse();
    let allStr = '';
    const domainAllStr = [];
    for (let j = 0; j < domainStr.length; j++) {
      allStr += `.${domainStr[j]}`;
      domainAllStr.push(allStr);
    }
    for (let j = 0; j < domainAllStr.length; j++) {
      const inDomains = domainAllStr[j];
      if (obj[inDomains]) {
        obj[inDomains]++;
      } else {
        obj[inDomains] = 1;
      }
    }
  }

  return obj;
}

module.exports = getDNSStats;
