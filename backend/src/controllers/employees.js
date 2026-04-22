import employedModel from '../models/employees.js';
import departmentsModel from '../models/departments.js';

const employeedController = {
    create: async(req , res)=>{
        try{
            const {employeeCode, name, lastname1, lastname2, code_department} = req.body;

            const employeeExist = await employedModel.findOne({ employeeCode });
            if (employeeExist) {
                return res.status(400).json({ message: "Ya existe un usuario con este codigo. ", employeeExist });
            }

            let codeDepartment = code_department;

            const codeDepartmentSearch = await departmentsModel.findOne({ codeDepartment });
            if(!codeDepartmentSearch){
                return res.status(400).json({message:'El codigo de departamento no se encuentra. ', codeDepartmentSearch})
            }

            const newEmployee = new employedModel({
                employeeCode,
                name,
                lastname1,
                lastname2,
                code_department,
            });

            await newEmployee.save();

            res.status(201).json({ message: "Usuario registrado correctamente" });

        }catch(error){
            res.status(500).json({message:'No se logro crear el usuario con exito. ', error})
        }
    },

    // Methode by read all employees created
    readAll: async (req, res) => {
        try {
            const allEmployee = await employedModel.find();
            res.status(201).json({ data: allEmployee })
        }
        catch (error) {
            res.status(500).json({ error: 'Error al leer los datos de los usuarios.' });
        }
    },

    // Methode by read employee specific
    read: async (req, res) => {
        try {
            const employeeCode  = Number(req.params.employeeCode)
            const employeeFound = await employedModel.findOne({employeeCode});
            if (!employeeFound) {
                res.status(404).json({ message: 'El empleado no fue encontrado' })
            } else {
                res.status(201).json({ data: employeeFound });
            }

        } catch (error) {
            console.error(`employeeCode`, error);
            res.status(500).json({ message: 'Error al leer los datos del empleado.', error });
        }
    },

    // Methode by update employee specific
    update: async (req, res) => {
        try {
            const employeeCode  = Number(req.params.employeeCode)
            const { employeeCodes, name, lastname1, lastname2, code_department } = req.body
            const employeeUpdate = await employedModel.findOneAndUpdate({employeeCode}, {
                employeeCodes,
                name,
                lastname1,
                lastname2,
                code_department
            });
            if (!employeeUpdate) {
                res.status(404).json({ message: 'Empleado no encontrado' })
            } else {
                console.log({data: employeeUpdate});
                res.status(201).json({ data: employeeUpdate, message: 'Empleado actualizado' });
            }

        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar los datos del empleado.' });
        }
    },

    // Methode by delete employee specific
    delete: async (req, res) => {
        try {
            const employeeCode  = Number(req.params.employeeCode)
            const employeeDelete = await employedModel.findOneAndDelete({employeeCode});
            if (!employeeDelete) {
                res.status(404).json({ message: 'Empleado no encontrado' })
            } else {
                res.status(201).json({ data: employeeDelete, message: 'Empleado eliminado' });
            }

        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar los datos del empleado.' });
        }
    }
};

export default employeedController;