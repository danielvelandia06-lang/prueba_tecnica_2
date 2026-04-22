import { Router } from 'express';
import departmentsController from '../controllers/departments.js'

const departmentsRouter = Router();

// Methode POST
departmentsRouter.post('/', departmentsController.create);

// Methode GET ALL
departmentsRouter.get('/' , departmentsController.readAll);

// Methode GET
departmentsRouter.get('/:codeDepartment', departmentsController.read);

// Methode PUT "Update"
departmentsRouter.put('/:codeDepartment' , departmentsController.update);

// Methode DELETE
departmentsRouter.delete('/:codeDepartment' , departmentsController.delete);

export default departmentsRouter;