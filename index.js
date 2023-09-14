const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Controladores 
const { getHome, postHome, updateHome, deleteHome } = require('./src/controllers/home.controller');
const { getUser, postUser, updateUser, deleteUser } = require('./src/controllers/user.controller');
// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(path.join(__dirname, '/public')));

// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/src/views'));
// Rutas
// Modulo Home
app.get('/', getHome);
app.post('/', postHome);
app.put('/', updateHome);
app.delete('/', deleteHome);

// Modulo Users
app.get('/usuarios', getUser);
app.post('/usuarios', postUser);
app.put('/usuarios', updateUser);
app.delete('/usuarios', deleteUser);
// parametro { force: true }
app.listen(PORT, function() {
    console.log(`Aplicacion Corriendo en puerto ${PORT}`);
})
