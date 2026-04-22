import { Router } from 'express';
import employeedController from '../controllers/employees.js'

const employeeRouter = Router();

// Methode POST
employeeRouter.post('/', employeedController.create);

// Methode GET ALL
employeeRouter.get('/' , employeedController.readAll);

// Methode GET
employeeRouter.get('/:employeeCode', employeedController.read);

// Methode PUT "Update"
employeeRouter.put('/:employeeCode' , employeedController.update);

// Methode DELETE
employeeRouter.delete('/:employeeCode' ,employeedController.delete);

export default employeeRouter;