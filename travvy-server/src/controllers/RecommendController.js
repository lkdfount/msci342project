// const Sequelize = require('sequelize')
// const Sequelize = require('sequelize')

const Attractions = require('../models').Attractions

module.exports = {
  async recommend (city) {
    const attractions = await Attractions.findAll({
      where: { city: city },
      logging: console.log
    })

    return attractions
  }
}
