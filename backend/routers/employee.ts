import express from "express";
import { z } from "zod";
import { api } from "./utils/api";


const createempno = api.fieldoptions.empno.useMutation();
  const createbirthname = api.fieldoptions.createOnebirthname.useMutation();
  const createfirstaname = api.fieldoptions.createOnefirstname.useMutation();
  const createLastname = api.fieldoptions.createOnelastname.useMutation();
  const createdegree = api.fieldoptions.createOneDegree.useMutation();
  const createHiredate = api.fieldoptions.createOneHiredate.useMutation();
  const createcureentpositioin = api.fieldoptions.createcureentpositioin.useMutation();
  const createtitlehistory =api.fieldoptions.createOnetitlehistory.useMutation();
  const createsalaryhistory =api.fieldoptions.createsalaryhistory.useMutation();


export let employerRouter = createTRPCRouter({
    createEmployer: protectedProcedure
      .input(
        z.object({
          empno: z.string(),
          birt_name: z.string(),
          first_name: z.string(),
          last_name: z.string(),
          gender: z.string(),
          hiredate: z.string(),
          companyLocation: z.string(),
          profile_pic_key: z.string(),
          employer_pic_key: z.string(),
          subscribed: z.string(),
        })
      ),

export const employerRouter = express.Router(),


    function createTRPCRouter(arg: unknown) {
        throw new Error("Function not implemented.");
    }

    function createTRPCRouter(arg: any, unknown: any) {
        throw new Error("Function not implemented.");
    }
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
