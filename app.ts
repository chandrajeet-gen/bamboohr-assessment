import express from 'express';
import { swaggerDocument } from './src/swagger/swagger';
import swaggerUI from 'swagger-ui-express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import empRoute from './src/routes/employee';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/employee', empRoute);

app.listen(port, () => {
  console.log('Server is running on http://localhost:8080/');
});
