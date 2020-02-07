// dependencies 
const inquirer = require('inquirer');
const mysql = require('mysql');


// connect to database
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'darkSalmon520!!!',
    database: 'employeeTracker'
});

// initiate mysql connection
connection.connect(function(err) {
    if (err) throw err;
    promptUser();
});

// prompt user for info
function promptUser () {
    inquirer.prompt ({        
            type: "rawlist",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all employees by Department",
                "View all employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View all roles"
            ]
        }).then(function(data) {
        console.log(data);
        switch (data.task) {
            case "View all employees":
              //function 
              viewAll();
              break;
      
            case "View all employees by Department":
              //function 
              break;
      
            case "View all employees by Manager":
              //function 
              break;
      
            case "Add Employee":
              //function 
              break;
      
            case "Remove Employee":
              //function 
              break;

            case "Update Employee Role":
                //function 
                break;

            case "Update Employee Manager":
                //function 
                break;
            
            case "View all roles":
                //function 
                viewAllRoles();
                break;            
            }
    });
}


// mysql functions
function viewAll () {
    let query = "SELECT * FROM employee";
    connection.query(query, function(err,res) {
        console.log(res);
        promptUser();
    });
}

function viewByDept () {
    let query = "SELECT * FROM department";
    connection.query(query, function(err,res) {
        console.log(res);
        promptUser();
    });    
}

function viewByManager () {
    let query = "";
    connection.query(query, function(err,res) {
        console.log(res);
        promptUser();
    });
}

function addEmployee () {
    let query = "";
    connection.query(query, function(err,res) {
        console.log(res);
        promptUser();
    });
}

function removeEmployee () {
    let query = "";
    connection.query(query, function(err,res) {
        console.log(res);
        promptUser();
    });
}

function updateEmployeeRole () {
    let query = "";
    connection.query(query, function(err,res) {
        console.log(res);
        promptUser();
    });
} 

function updateEmployeeManager () {
    let query = "";
    connection.query(query, function(err,res) {
        console.log(res);
        promptUser();
    });
}

function viewAllRoles () {
    let query = "SELECT * FROM roles";
    connection.query(query, function(err,res) {
        console.log(res);
        promptUser();
    });
}