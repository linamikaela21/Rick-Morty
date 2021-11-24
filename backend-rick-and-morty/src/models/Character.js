const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('character', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
            allowNull: false
        }
    })
}