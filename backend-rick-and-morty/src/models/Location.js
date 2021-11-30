const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('location', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dimension: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}