import employeesModel from '../models/employees.js';

const employeeDepartmentController = {

  getByDepartment: async (req, res) => {
    try {
      const code_department = Number(req.params.codeDepartment);

      const employees = await employeesModel.find({ code_department });

      return res.status(200).json({
        data: employees
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Error al obtener empleados',
        error
      });
    }
  }

};

export default employeeDepartmentController;