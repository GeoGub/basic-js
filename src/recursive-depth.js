const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0
    for (let elem of arr) {
      if (elem instanceof Array) depth += Math.max(depth, this.calculateDepth(elem))
    }
    return depth + 1
  }
};