module.exports = (sequelize, DataTypes) => {
    Attraction_type = sequelize.define('Attraction_type', {
    attraction_id: {
    type: DataTypes.INTEGER,
    field: 'attraction_id',
    primaryKey: true
    },
    activity_id: {
    type: DataTypes.INTEGER,
    field: 'activity_id',    
    primaryKey: true
    
    },
    }, {
    tableName: 'Attraction_type',
    timestamps: false
    }
    )
    
    return Attraction_type
    
    }