
// Imports locations model from Locaotions.js
const Location = require('../models').Location

// This is the logic for queriying database for locations information for all cities
module.exports = {
  async getlocation() {
    const location = await Location.findAll({
      logging: console.log
    })

    return location
  }

}
