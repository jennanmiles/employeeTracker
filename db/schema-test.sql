DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(70),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,4),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department (id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles (id),
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);

USE employeeTracker;
SELECT * FROM employee;


INSERT INTO department (dept_name) VALUES ('Development');
INSERT INTO department (dept_name) VALUES ('Design');
INSERT INTO department (dept_name) VALUES ('Content');


INSERT INTO roles (title,salary,department_id) VALUES ('Sr. Developer','80000','1');
INSERT INTO roles (title,salary,department_id) VALUES ('Developer','60000','1');
INSERT INTO roles (title,salary,department_id) VALUES ('Sr. Designer','60000','2');
INSERT INTO roles (title,salary,department_id) VALUES ('Designer','50000','2');
INSERT INTO roles (title,salary,department_id) VALUES ('Sr. Writer','50000','3');
INSERT INTO roles (title,salary,department_id) VALUES ('Writer','45000','3');


INSERT INTO employee (first_name,last_name,role_id, manager_id) 
VALUES ('Amy','Jen','1',0);
INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Collin','Mccabe','1',0);
INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Matthew','Carpenter','1',0);
INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Neil','Bernardo','2',0);
INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Luisa','Gonzales','2',0);
INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Andrea','Howlett','2',0);
INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Louie','Christensen','3',0);
INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Kathleen','Johnson','3',0);
INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ('Jeff','Atwell','3',0);