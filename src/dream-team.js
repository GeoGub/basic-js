const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = []
  if (!Array.isArray(members)) {
    return false
  }
  members.map(member => {
    if (typeof(member) === 'string') {
      dreamTeam.push(member.split(" ").join("").split("")[0].toUpperCase())
    }
  })
  return dreamTeam.sort().join('')
};
