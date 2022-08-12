const Sequelize = require('sequelize')
const sequelize = new Sequelize('livros', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3000
})

module.exports = sequelize