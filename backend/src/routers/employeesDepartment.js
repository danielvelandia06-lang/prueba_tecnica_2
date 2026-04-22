import express from 'express';
import employeeDepartmentController from '../controllers/employeesDepartment.js';
// import departments from '../models/departments.js';
// import employeesModel from '../models/employees.js';

const employeesDepartmentrouter = express.Router();

// 🔥 AQUÍ agregas el endpoint
employeesDepartmentrouter.get('/empleado/departamento/:codeDepartment', employeeDepartmentController.getByDepartment);

employeesDepartmentrouter.get('/empleado/departamento/:codeDepartment', async (req, res) => {
  try {
    const codeDepartment = Number(req.params.codeDepartment);

    const employees = await employeesModel.find( {codeDepartment} );

    res.status(200).json({ data: employees });

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener empleados', error });
  }
});


export default employeesDepartmentrouter;