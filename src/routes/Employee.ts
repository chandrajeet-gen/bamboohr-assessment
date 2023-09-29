import { Router } from 'express';
import { getEmployee } from '../controllers/employee';
const router = Router();

router.get('/get/:id', getEmployee);

export default router;
