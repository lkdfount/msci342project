// Imports attractions model from Attractions.js
const Attractions = require('../models').Attractions
const { Op } = require("sequelize");
const Attraction_type = require('../models').Attraction_type
//const Users_type = require('../models').Users_type
const Activity =  require('../models').Activity
const Users = require('../models').Users

// This is the logic for queriying database for attraction information for the desired city
module.exports = {
  async recommend (city, groupSize, startDate, endDate,user,preferences) {   
    if(user == null || preferences == 'Yes'){
      activity_ids = await Activity.findAll({
        attributes: ['activity_id'],
        model: Activity,
        as: 'Activity'
        })
 
    const activity_ids_parsed = []

    for (i = 0; i < activity_ids.length; i++) {
      activity_ids_parsed.push(activity_ids[i].dataValues.activity_id);
    } 
    
    Attractions.hasMany(Attraction_type, {foreignKey: 'attraction_id'})
    Attraction_type.belongsTo(Attractions, {foreignKey: 'attraction_id'})

    const attractions = await Attractions.findAll({ include: {
      model: Attraction_type,
      group: ['$Attractions.attraction_id$'],
      where: {
      '$Attractions.city$': city,
      '$Attractions.max_number_guest$': {[Op.gte]: groupSize}, 
      '$Attractions.opening_date$':{[Op.lte]:startDate}, 
      '$Attractions.closing_date$':{[Op.gte]: endDate}, 
      activity_id: activity_ids_parsed
      }
    }
      });
      
    return attractions
    }
    else{
      const activity_ids = await Users.findAll({
        attributes: ['activity_id'],
        model: Users,
        as: 'Users',
        where: {Email: user} 
        })
      if(activity_ids.length == 0){

        Attractions.hasMany(Attraction_type, {foreignKey: 'attraction_id'})
        Attraction_type.belongsTo(Attractions, {foreignKey: 'attraction_id'})
    
        const attractions = await Attractions.findAll({ include: {
          model: Attraction_type,
          group: ['$Attractions.attraction_id$'],
          where: {
          '$Attractions.city$': city,
          '$Attractions.max_number_guest$': {[Op.gte]: groupSize}, 
          '$Attractions.opening_date$':{[Op.lte]:startDate}, 
          '$Attractions.closing_date$':{[Op.gte]: endDate}, 
          }
        }
  
        });
    
        return attractions
      }else{
        const activity_ids_parsed = []

        for (i = 0; i < activity_ids.length; i++) {
          activity_ids_parsed.push(activity_ids[i].dataValues.activity_id);
        } 
            
        Attractions.hasMany(Attraction_type, {foreignKey: 'attraction_id'})
        Attraction_type.belongsTo(Attractions, {foreignKey: 'attraction_id'})
    
        const attractions = await Attractions.findAll({ include: {
          model: Attraction_type,
          group: ['$Attractions.attraction_id$'],
          where: {
          '$Attractions.city$': city,
          '$Attractions.max_number_guest$': {[Op.gte]: groupSize}, 
          '$Attractions.opening_date$':{[Op.lte]:startDate}, 
          '$Attractions.closing_date$':{[Op.gte]: endDate}, 
          activity_id: activity_ids_parsed
          }
        }
  
        });
    
        return attractions        
      }

      
    }

  }

}
