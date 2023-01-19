var mysql = require('mysql');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


var con = mysql.createConnection({
    host: "labs.inspedralbes.cat",
    user: "a21gursinsin_singh",
    password: "Singh_09",
    database: "a21gursinsin_nodejs_mysql"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


// Insert
app.get('/insert', (req, res) => {

    var sql = "INSERT INTO users (name) VALUES ('Company Inc')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

});


// Select 
app.get('/select', (req, res) => {

    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        res.send(result);

    });
});

// Update
app.get('/update', (req, res) => {

    var sql = "UPDATE users SET name = 'Gurpreet' WHERE PersonID = '1'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });

});

// Delete
app.get('/delete', (req, res) => {

    var sql = "DELETE FROM users WHERE PersonID = '1'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });

});


server.listen(3000, () => {
    console.log('listening on *:3000');
});
