const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// Initializes the new sequelize instance for querying
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options,
  {
    timestamps: false
  }
)

// This sequelizes every file in the model's path other than index.js
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    
    const model = require(path.join(__dirname,file))(sequelize, Sequelize.DataTypes)
        //require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model] = model
  })
  // Ensures that the database is connected
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
