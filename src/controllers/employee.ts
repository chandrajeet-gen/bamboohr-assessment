import { Request, Response } from 'express';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import dotenv from 'dotenv';
import { propsArray, Employee } from '../models/employee';
import moment from 'moment';

dotenv.config();

const API_KEY = btoa(String(process.env.API_KEY) + ':');
const SUBDOMAIN = process.env.SUBDOMAIN;

export const getEmployee = async (req: Request, res: Response) => {
  const id = req.params.id;
  const URI = decodeURIComponent(
    `https://api.bamboohr.com/api/gateway.php/${SUBDOMAIN}/v1/employees/${id}?fields=${propsArray.join(
      ',',
    )}`,
  );

  axios({
    url: URI,
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Basic ${API_KEY}`,
    },
  })
    .then((response: AxiosResponse) => {
      const data = response.data;
      if (data) {
        const employeeData: Employee = {
          id: data.id,
          first_name: data.firstName,
          last_name: data.lastName,
          name: data.firstName + ' ' + data.lastName, // firstName + lastName
          display_name: data.preferredName ?? data.nickname ?? data.firstName + ' ' + data.lastName,
          date_of_birth: new Date(data.dateOfBirth),
          personal_phone_number: data.mobilePhone,
          work_email: data.workEmail,
          job_title: data.jobTitle,
          department: data.department,
          start_date: new Date(data.hireDate),
          tenure: calculateTenure(data.hireDate), // tenure in years
          work_anniversary: calculateNextAniversary(data.hireDate),
        };

        return res.send(employeeData);
      }

      return res.send(`No data found for employee id - ${id}`);
    })
    .catch((err: Error) => {
      console.log(err);
      res.status(500).send(err);
    });
};

function calculateTenure(date: string): number {
  const tenureInYear = moment(date, 'YYYY-MM-DD').diff(new Date(), 'years');
  return tenureInYear;
}

function calculateNextAniversary(date: string): Date {
  const nextWorkAniversary = new Date(new Date(date).setFullYear(new Date().getFullYear()));

  if (moment(nextWorkAniversary).isBefore()) {
    nextWorkAniversary.setFullYear(new Date().getFullYear() + 1);
  }

  return nextWorkAniversary;
}
