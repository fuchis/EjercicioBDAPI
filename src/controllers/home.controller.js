const { HomeModel } = require('../models/home.model');

/*
* Funcion modificada, se volvio asyncrona, se usa el modelo para hacer
* las consultas a la bd
*/
async function getHome(request, response) {
    await HomeModel.create({
        colorCasa: 'rosa'
    })
    return response.render('pinkHome', { titulo: 'Home' });
}

function postHome(request, response) {
    console.log(request.body);
    return response.send('MSG RECIBIDO');
}

function updateHome(request, response) {
    console.log(request.body);
    return response.send('MSG RECIBIDO');
}

function deleteHome(request, response) {
    console.log(request.body);
    return response.send('MSG RECIBIDO');
}

module.exports = { getHome, postHome, updateHome, deleteHome };