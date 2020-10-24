
// Imports attractions model from Attractions.js
const Attractions = require('../models').Attractions

// This is the logic for queriying database for attraction information for the desired city
module.exports = {
  async recommend (city) {
    const attractions = await Attractions.findAll({
      where: { city: city },
      logging: console.log
    })

    return attractions
  }
}
