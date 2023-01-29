/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  const sLen = s.length;
  let currentLen = 0
  for (let i = 0; i < words.length; i++) {
    currentLen += words[i].length
    if (currentLen === sLen) {
      return words.slice(0, i+1).join('') === s
    }
    if (currentLen >= sLen) {
      return false
    }

  }
};
console.log(isPrefixString('iloveleetcode',["i","love","leetcode","apples"]))