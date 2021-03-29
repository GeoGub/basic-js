const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sA) {
  if (( typeof(sA) != 'string' ) || ( Number(sA) <= 0) || (Number(sA) >= 15)) {
    return false
  }
  k = Number(sA) / 5730
  N = 8.0
  N0 = 15
  ln = Math.log(N0 / N)
  console.log(sA, ln/k)
  if ( ln/k === NaN ) {
    return false
  }
  return ln/k
};
