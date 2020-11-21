// Imports attractions model from Attractions.js
const { Op } = require("sequelize");
const Users_type = require('../models').Users_type

// This is the logic for queriying database for attraction information for the desired city
module.exports = {
  async getActivityIds (user) {   
    const activity_ids = Users_type.findAll({
      attributes: ['activity_id'],
      model: Users_type,
      as: 'Users_type',
      where: {Email: user} 
      })
    return activity_ids
  }
}