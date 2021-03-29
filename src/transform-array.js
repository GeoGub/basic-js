const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = []
  let discard = false
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if ((element == "--discard-next") && (i != arr.length - 1)) {
      i+=2
    } else if ((element == "--discard-prev") && (i != 0)) {
      newArr.pop()
    } else if ((element == "--double-next") && (i != arr.length - 1)) {
       newArr.push(arr[i+1])
    } else if ((element == "--double-prev") && (i != 0)) {
      newArr.push(arr[i-1])
    } else if (["--discard-next", "--discard-prev", "--double-next", "--double-prev"].indexOf(element) != -1) {
      continue
    } else {
      newArr.push(element)
    }
  }
  return newArr
};
