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
    opening_date: DataTypes.TEXT,
    closing_date: DataTypes.TEXT,
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
// module.exports = (sequelize, DataTypes) => {
//   const Institution = sequelize.define('Institution', {
//     institutionId: {
//       type: DataTypes.INTEGER,
//       field: 'institutionID',
//       primaryKey: true,
//       autoIncrement: true
//     },
//     institutionName: {
//       type: DataTypes.STRING,
//       field: 'institutionName',
//       allowNull: false
//     }
//   }, {
//     tableName: 'institution'
//   })

//   Institution.associate = (models) => {
//     Institution.hasMany(models.UserEducation, { as: 'userEducation', foreignKey: 'institutionId' })
//   }

//   return Institution
// }
