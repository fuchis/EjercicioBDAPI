const { sequelize } = require('../config/database/connection.config');
const {  DataTypes } = require('sequelize');

// Modelos, representacion de la tabla en la bd
const HomeModel = sequelize.define('home', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    colorCasa: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'home'
});

module.exports = { HomeModel };