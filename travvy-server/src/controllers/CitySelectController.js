
// Imports locations model from Locaotions.js
const Locations = require('../models').Location

// This is the logic for queriying database for locations information for all cities
module.exports = {
  async details (city) {
    const attractions = await Locations.findAll({
      where: { city: city },
      logging: console.log
    })

    return locations
  }

}
