CREATE DATABASE employee;

CREATE TABLE details(
    employee_id SERIAL PRIMARY KEY,
    _name VARCHAR(255),
    _dept VARCHAR(255),
    _designation VARCHAR(255),
    _salary int,
    _dob VARCHAR(255),
    _address VARCHAR(255),
    _doj  VARCHAR(255),
    _phone_no VARCHAR(255)
);