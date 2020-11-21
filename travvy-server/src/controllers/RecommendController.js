
// Imports attractions model from Attractions.js
const Attractions = require('../models').Attractions
const Users_type = require('../models').Users_type
const Attraction_type = require('../models').Attraction_type

const { Op } = require("sequelize");

// This is the logic for queriying database for attraction information for the desired city
module.exports = {
  async recommend (city, groupSize, startDate, endDate, user) {   
    const activity_ids = await Users_type.findAll({
      // include:{
        model: Users_type,
        as: 'Users_type',
        where: {Email: user}
    })
    print(activity_ids)
    const attractions = await Attractions.findAll({
      // include:{
        model: Attraction_type,
        as: 'Attraction_type',
        where: {city: city,
                max_number_guest: {[Op.gte]: groupSize}, 
                opening_date:{[Op.lte]:startDate}, 
                closing_date:{[Op.gte]: endDate},
                activity_id:activity_ids  
                }
    })
    return attractions
  }

}
