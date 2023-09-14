const { Sequelize } = require('sequelize');

// Configuracion de la conexion a la base de datos, creara un archivo llamado
// database.sqlite3, esta es la base de datos
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/config/database/database.sqlite3'
});


// Prueba de conexion con la base de datos.
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// Sincronizar los modelos con las tablas de la bd, en caso de que no existan
// las tablas, se crearan.  
sequelize.sync().then(() => {
    console.log("Re-sync db.");
});
  

module.exports = { sequelize };