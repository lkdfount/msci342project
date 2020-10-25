// Sequelize model for table that is called "locations"
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    location_id: {
      type: DataTypes.INTEGER,
      field: 'location_id',
      primaryKey: true
    },
    city: DataTypes.TEXT,
    country: DataTypes.TEXT,
  }, {
    tableName: 'Location',
    timestamps: false
  }
  )

  return Location
}
