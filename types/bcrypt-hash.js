const CustomString = require('../utils/custom-string')

module.exports = class BcryptHash extends CustomString {
  validate(value){
    if (!/^[.\/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$]{60}$/.test(value))
      throw 'Incorrect value format: expected valid hash format'
  }
}
