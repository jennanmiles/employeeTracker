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
              addEmployee();
              break;
      
            case "Remove Employee":
              //function 
              removeEmployee();
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
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: "Enter employee's first name"
        },
        {
            name: 'last_name',
            type: 'input',
            message: "Enter employee's last name"
        },
        {
            name: 'role',
            type: 'checkbox',
            message: "enter 1 for development dept, 2 for design dept, 3 for content dept",
            choices: [
                1,
                2,
                3
            ]
        }, 
        {
            name: 'manager',
            type: 'input',
            messsage: "Enter employee's manager"
        }
    ]).then(function(answer) {
        console.log(answer);
        let query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
        connection.query(query, [answer.first_name, answer.last_name, answer.role, answer.manager], function(err,res) {
            if (err) {
                console.log('error');
            } else {
                console.log('success');
            }
            promptUser();
        });
    });
}

function removeEmployee () {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: "Enter employee's first name that you'd like to remove"
        },
        {
            name: 'last_name',
            type: 'input',
            message: "Enter employee's last name that you'd like to remove"
        } 
    ]).then(function(answer) {
        let query = "DELETE FROM employee WHERE first_name = ? AND last_name = ?";
        connection.query(query, [answer.first_name, answer.last_name], function(err,res) {
            console.log(res);
            if (err) {
                console.log('error');
            } else {
                console.log('success');
            }
            promptUser();
        });
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