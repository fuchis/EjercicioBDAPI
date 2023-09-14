const {UserModel} = require('../models/users.model');
const path = require('path');
const viewsRoutes = path.join(__dirname, '..', 'views');

function getUser(request, response){
    response.render('users', {titulo: 'Users'});
}

function postUser(request, response) {
    console.log(request.body);
    response.send('MSG RECIBIDO');
}

function updateUser(request, response) {
    console.log(request.body);
    response.send('MSG RECIBIDO');
}

function deleteUser(request, response) {
    console.log(request.body);
    response.send('MSG RECIBIDO');
}

module.exports = { getUser, postUser, updateUser, deleteUser };