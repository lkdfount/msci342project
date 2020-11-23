module.exports = (sequelize, DataTypes) => {
    Activity= sequelize.define('Activity', {
    activity_id: {
    type: DataTypes.INTEGER,
    field: 'activity_id',
    primaryKey: true
    },
    activity_type: DataTypes.TEXT,
    }, {
    tableName: 'Activity',
    timestamps: false
    }
    )
    
    return Activity
    
    }