module.exports = (sequelize, DataTypes) => {

    Users_type = sequelize.define('Users_type', {
    Email: {
    type: DataTypes.TEXT,
    field: 'Email',
    primaryKey: true
    },
    activity_id: {
    type: DataTypes.INTEGER,
    field: 'activity_id',
    primaryKey: true
    },
    
    }, {
    
    tableName: 'Users_type',  
    timestamps: false  
    }
    
    )
    
    return Users_type
    
    }