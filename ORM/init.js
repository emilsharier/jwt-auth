const sequelize = require('./sequelize')
require('../models/user')

const init = async () => {
    await sequelize.sync({ logging: false, alter: true })
}

module.exports = init