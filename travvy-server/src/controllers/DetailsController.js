
// Imports attractions model from Attractions.js
const Attractions = require('../models').Attractions

// This is the logic for queriying database for attraction information for the desired city
module.exports = {
  async details (city) {
    const attractions = await Attractions.findAll({
      where: { attraction_name: attraction_name },
      logging: console.log
    })

    return attractions
  }

}
