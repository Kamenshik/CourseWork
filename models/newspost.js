const Sequelize = require('sequelize')

module.exports = (seq) => {
    return seq.define('NewsPost', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        imagepath: {
            type: Sequelize.STRING,
            allowNull: true
        },
        dateposted: {
            type: Sequelize.DATE,
            allowNull: false
        }
    })
}