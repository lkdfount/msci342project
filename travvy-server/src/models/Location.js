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
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE
  }, {
    tableName: 'Location',
    timestamps: false
  }
  )

  return Location
}
