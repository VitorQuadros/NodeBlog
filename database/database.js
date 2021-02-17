const Sequelize = require('sequelize');

const connection = new Sequelize('blog', 'root', '8642', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;
