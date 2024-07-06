const mysql =require('mysql2');

let connection = mysql.createConnection({
    host: "localhost",
    database: "db_patagonia",
    user:"root" ,
    password: ""
});

// Prueba para ver si funciona la conexion
connection.connect((err)=>{
    if(err){
        console.error('Error conectando a la base de datos', err);
        return;
    }else{
        console.log ("Conexion exitosa")
    }
});

module.exports = connection;

//conexion.end();

