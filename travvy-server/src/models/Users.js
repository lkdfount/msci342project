// Sequelize model for table that is called "users"
module.exports = (sequelize, DataTypes) => {
    Users = sequelize.define('Users', {
      Email: {
        type: DataTypes.TEXT,
        field: 'Email',
        primaryKey: true
      },
      Name: DataTypes.TEXT,
      Password: DataTypes.TEXT,
      Age: DataTypes.INTEGER,
      Gender: DataTypes.TEXT,
      Instagram_Username: DataTypes.TEXT,
      Preferred_Activity_Type: DataTypes.TEXT
    }, {
      tableName: 'Users',
      timestamps: false
    }
    )
  
    return Users
  }
  