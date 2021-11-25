const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('episode', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        episode: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
}