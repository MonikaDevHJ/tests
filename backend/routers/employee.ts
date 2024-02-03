import express from "express";

export const employeeRouter = express.Router();

// 1.
// get an employee's basic details, i.e their
// emp_no
// birth_name
// first_name
// last_name
// gender
// hire_date

// 2.
// get an employee's complete details, i.e their
//  - current position
//  - title history
//  - salary history
//  - department details
//  - department manager
//  when given an id

// 3.
// get the employee who has most recently switched roles

// 4.
// make employee with the id 111877 the manager in Development department

// 5.
// employee Hideyuki Delgrande has been fired,
// - delete their record
// - delete their salary for the month of feb
