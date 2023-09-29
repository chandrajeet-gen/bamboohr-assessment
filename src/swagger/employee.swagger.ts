import { exampleEmployeeData } from '../models/employee';

export const employee = {
  tags: ['Employee'],
  description: 'Returns the Employee details.',
  operationId: 'getEmployee',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      in: 'path',
      name: 'empId',
      schema: {
        type: 'string',
      },
      required: true,
    },
  ],
  responses: {
    '200': {
      description: 'A list of users.',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: exampleEmployeeData,
          },
        },
      },
    },
  },
};
