const { sequelize } = require('../config/database/connection.config');
const {  DataTypes } = require('sequelize');

// Modelos, representacion de la tabla en la bd
const UserModel = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'users'
});

module.exports = { UserModel }