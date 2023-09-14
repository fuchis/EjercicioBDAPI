# EjercicioBDAPI
 
##
Instalar los paquetes sqlite y sequelzie con los comandos:

```
npm install squelize sqlite3
```

Sequelize es un ORM de base de datos, ORM son las siglas de Object Relational Mapping, esta libreria nos permite trabajar nuestras consultas a base de datos como si fueran objetos y funciones en vez de consultas SQL, ejemplo:

```
executar.rawQuery("SELECT * FROM users");
```

pasa a:
```
users.findAll();
```

Para poder hacer esto, debemos mapear nuestras tablas de bd en modelos que pueda leer la libreria, estos modelos los ponemos en la carpeta models.

Para mas información acerca de las funciones de se sequelize, leer la [documentación](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/).

Sqlite3 es el driver de la base de datos, este driver sirve para que la libreria sequelize pueda utilizar la base de datos de tipo sqlite.

Los archivos que se modificaron fueron:

Ruta src/controllers:

- home.controller.js

Ruta src/config/database
- connection.config.js

Ruta src/models

- home.model.js
- users.model.js

Programación Asincrona:

Debido al comportamiento de las librerias de base de datos, se comenzara a usar funciones asincronas.

Se puede observar que en la funcion del controlador home.controller, el metodo getHome paso de:
```
function getHome(request, response) {
    ...
    return response ...
}
```

a

```
async function getHome(request, response) {
    await HomeModel.create({
        ...
    });
    return response ...
}
```

Esto significa que se volvio asincrono, tambien podemos observar que hay una palabra nueva llamada await, esto sifnica que hasta que no termine la ejecucion de la funcion HomeModel.create, no se va a ejecutar el return response...

Igual se puede observar en el archivo connection.config.js, que hay funciones de la forma:
```
sequelize.sync().then(() => {
    ...
});
  
```

Esta es otra manera de ejecutar funciones asincronicas, esto se conoce como promesas.

Ambas funciones (async/await y promesas) sirven para lo mismo, trabajar con funciones asincronicas.