import { employee } from './employee.swagger';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'Swagger implementation for the API',
    termsOfService: '',
    contact: {
      name: 'Chandrajeet Singh',
      email: 'chandrajeet.singh@genesistechnologies.in',
      url: 'http://localhost:8080/',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:8080/',
      description: 'Local server',
    },
  ],
  tags: [
    {
      name: 'Users',
    },
  ],
  paths: {
    '/employee/get/{empId}': {
      get: employee,
    },
  },
};
