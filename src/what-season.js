const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) == 'undefined') {
    return 'Unable to determine the time of year!'
  }
  let seasons = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
  }
  for (let key in seasons) {
    if (seasons[key].indexOf(date.getMonth()) != -1) {
      return key
    }
  }
};
