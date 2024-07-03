//// Este archivo no sé si sirve para algo por ahora////////
//// funciona con el comando "node conexion.js" ///////
let mysql = require("mysql");

// Conexion a la base de datos
let conexion = mysql.createConnection({
    host: "localhost",
    database: "db_patagonia",
    user:"root" ,
    password: ""
});

// Prueba para ver si funciona la conexion
conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log ("Conexion exitosa")
    }
});

conexion.end();