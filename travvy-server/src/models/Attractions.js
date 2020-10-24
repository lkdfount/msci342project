module.exports = (sequelize, DataTypes) =>
  sequelize.define('Attractions', {
    attraction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    attraction_name: DataTypes.TEXT,
    location_id: DataTypes.INTEGER,
    city: DataTypes.TEXT,
    country: DataTypes.TEXT,
    email_address: DataTypes.TEXT,
    phone_number: DataTypes.TEXT,
    street_address: DataTypes.TEXT,
    opening_date: DataTypes.TEXT,
    closing_date: DataTypes.TEXT,
    max_number_guest: DataTypes.TEXT,
    ticket_price: DataTypes.TEXT,
    mask_required: DataTypes.TEXT,
    covid_safety_measures: DataTypes.TEXT
  })
