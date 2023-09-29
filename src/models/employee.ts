export interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  name: string; // firstName + lastName
  display_name: string; // name
  date_of_birth?: Date;
  avatar_url?: string; // field not found
  personal_phone_number: string;
  work_email: string;
  job_title?: string;
  department: string;
  manager_id?: string; // missing in the fields
  start_date?: Date;
  tenure?: number; // hireDate to current date
  work_anniversary?: Date; // calculate the next aniversary from hireDate
}

export const propsArray = [
  'firstName',
  'lastName',
  'preferredName',
  'dateOfBirth',
  'mobilePhone',
  'workEmail',
  'jobTitle',
  'department',
  'hireDate',
  'nickname',
];

export const exampleEmployeeData = {
  id: '5',
  first_name: 'Ashley',
  last_name: 'Adams',
  name: 'Ashley Adams',
  display_name: 'Ashley Adams',
  date_of_birth: '1982-11-10T00:00:00.000Z',
  personal_phone_number: '+44 207 555 6671',
  work_email: 'aadams@efficientoffice.com',
  job_title: 'HR Administrator',
  department: 'Human Resources',
  start_date: '2023-06-05T00:00:00.000Z',
  tenure: 0,
  work_anniversary: '2024-06-05T00:00:00.000Z',
};
