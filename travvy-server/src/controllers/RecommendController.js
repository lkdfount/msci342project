
// Imports attractions model from Attractions.js
const Attractions = require('../models').Attractions
const { Op } = require("sequelize");

// This is the logic for queriying database for attraction information for the desired city
module.exports = {
  async recommend (city, groupSize, startDate, endDate) {
    
    const attractions = await Attractions.findAll({
      // include:{
        model: Attractions,
        as: 'Attractions',
        where: {city: city,

                max_number_guest: {[Op.gte]: groupSize}, 
                opening_date:{[Op.lte]:startDate}, 
                closing_date:{[Op.gte]: endDate} 
                }
    })

    return attractions
  }

}
