const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 2000;

const {getHomePage} = require('./routes/index');
const {addEmployeePage, addEmployee} = require('./routes/employee');

// create connection to database
/*const db = mysql.createConnection ({
    host: 'mysqldb.c1bknsb7z2cn.us-east-2.rds.amazonaws.com',
    user: 'mysqldb',
    password: 'mysqldbpass',
    database: 'mysqldb'
});
*/

// create connection to database
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'mysqlpassword',
    database: 'employee'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database aws');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

app.get('/', getHomePage);
app.get('/add', addEmployeePage);
app.post('/add', addEmployee);

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});