
// Imports users model from Users.js
const User = require('../models').Users

// This is the logic for queriying database for users
module.exports = {
  async getuser() {
    const user = await User.findAll({
      logging: console.log
    })

    return user
  }

}
