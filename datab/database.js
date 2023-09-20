const mysql = require('mysql2');
const context  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'celil123',
    database:'blog'
});


module.exports = context.promise();