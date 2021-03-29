const CustomError = require("../extensions/custom-error");

const chainMaker = {
  len: 0,
  chain: [],

  getLength() {
    return this.len
  },

  addLink(value = '') {
    this.chain.push(`( ${value} )`)
    this.len++
    return this
  },

  removeLink(position) {
    console.log(position)
    try {
      if ((typeof(position) != 'number') ||(!position === parseInt(position, 10)) || (position <= 0) || (position >= this.chain.length)) {
        this.chain.length = 0
        throw new Error('THROWN')
      }
    } catch(e) {
      this.chain.length = 0
      return e.message
    }
    this.chain.splice(position-1, 1)
    return this
  },

  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },

  finishChain() {
    result = this.chain.join('~~')
    this.chain.length = 0
    return result
  }
};

module.exports = chainMaker;
