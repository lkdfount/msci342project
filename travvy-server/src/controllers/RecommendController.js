// Imports attractions model from Attractions.js
const Attractions = require('../models').Attractions
const { Op } = require("sequelize");
const Attraction_type = require('../models').Attraction_type
const Users_type = require('../models').Users_type
const UserTypeController = require('../controllers/UserTypeController.js')


// This is the logic for queriying database for attraction information for the desired city
module.exports = {
  async recommend (city, groupSize, startDate, endDate,user) {   

    const activity_ids = await Users_type.findAll({
      attributes: ['activity_id'],
      model: Users_type,
      as: 'Users_type',
      where: {Email: user} 
      })
    
    //const activity_ids = await UserTypeController.getActivityIds(query.user)

    const activity_ids_parsed = []

    for (i = 0; i < activity_ids.length; i++) {
      activity_ids_parsed.push(activity_ids[i].dataValues.activity_id);
    } 
    
    console.log(activity_ids_parsed)


    Attractions.hasMany(Attraction_type)

    // const attractions = await Attractions_type.findAll({ include: Attractions })

    const attractions = await Attractions.findAll({
    include:{
        model:Attraction_type,
        as: 'Attraction_type',
        where: {city: city,
                max_number_guest: {[Op.gte]: groupSize}, 
                opening_date:{[Op.lte]:startDate}, 
                closing_date:{[Op.gte]: endDate}, 
                activity_id:activity_ids_parsed
                }
            }
    })

    console.log(attractions)
    
    return attractions
  }

}
