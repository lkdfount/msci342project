// Sequelize model for table that is called "users"
module.exports = (sequelize, DataTypes) => {
    User = sequelize.define('User', {
      Email: {
        type: DataTypes.TEXT,
        field: 'email',
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
  
    return User
  }
  