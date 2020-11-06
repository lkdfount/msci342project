// Sequelize model for table that is called "attractions"
module.exports = (sequelize, DataTypes) => {
  const Attraction = sequelize.define('Attractions', {
    attraction_id: {
      type: DataTypes.INTEGER,
      field: 'attraction_id',
      primaryKey: true
    },
    attraction_name: DataTypes.TEXT,
    location_id: DataTypes.INTEGER,
    city: DataTypes.TEXT,
    country: DataTypes.TEXT,
    email_address: DataTypes.TEXT,
    phone_number: DataTypes.TEXT,
    street_address: DataTypes.TEXT,
    opening_date: DataTypes.DATE,
    closing_date: DataTypes.DATE,
    max_number_guest: DataTypes.TEXT,
    ticket_price: DataTypes.TEXT,
    mask_required: DataTypes.TEXT,
    covid_safety_measures: DataTypes.TEXT
  }, {
    tableName: 'Attractions',
    timestamps: false
  }
  )

  return Attraction
}
