const mysql=require('mysql');
const connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sakila',
    port:'3306'
});

module.exports=connect;
