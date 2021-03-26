import mysql from "mysql2";

//Create the connection to database
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'node_crud'
});

export default db;
