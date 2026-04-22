import departmentsModel from "../models/departments.js";

const departmentsController = {
    create: async(req, res)=>{
        try {
            const {codeDepartment, nameDepartment} = req.body;

            const departmentsCode = await departmentsModel.findOne({ codeDepartment });
            if(departmentsCode){
                return res.status(400).json({ message: "El codigo ingresado del departamento ya existe" });
            }

            const departmentNameExist = await departmentsModel.findOne({ nameDepartment });
            if (departmentNameExist) {
                return res.status(400).json({ message: "El nombre del departamento ya existe" });
            }
            
            const newDepartment = new departmentsModel({
                codeDepartment,
                nameDepartment,
            });

            await newDepartment.save();

            res.status(201).json({message:'El departamento ha sido creado.'});

        } catch (error) {
            res.status(500).json({message:'El departamento no ha podido ser creado. ', error})
        }
    },

    // Methode by read all departments created
    readAll: async (req, res) => {
        try {
            const allDepartment = await departmentsModel.find();
            res.status(201).json({ data: allDepartment })
        }
        catch (error) {
            res.status(500).json({ error: 'Error al leer los datos de los Departamentos.' });
        }
    },

    // Methode by read department specific
    read: async (req, res) => {
        try {
            const codeDepartment = Number(req.params.codeDepartment)
            const departmentFound = await departmentsModel.findOne({codeDepartment});
            if (!departmentFound) {
                res.status(404).json({ message: 'El departamento no fue encontrado' })
            } else {
                res.status(200).json({ data: departmentFound });
            }

        } catch (error) {
            res.status(500).json({ error: 'Error al leer los datos del departamento.', error });
        }
    },

    // Methode by update department specific
    update: async (req, res) => {
        try {
            const codeDepartment = Number(req.params.codeDepartment)
            const { nameDepartment } = req.body
            const codeDepartmentUpdate = await departmentsModel.findOneAndUpdate({codeDepartment},{
                nameDepartment,
            });
            if (!codeDepartmentUpdate) {
                res.status(404).json({ message: 'Departamento no encontrado' })
            } else {
                console.log({data: codeDepartmentUpdate});
                res.status(201).json({ data: codeDepartmentUpdate, message: 'Departamento actualizado' });
            }

        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar los datos del Departamento. ', error });
        }
    },

    // Methode by delete department specific
    delete: async (req, res) => {
        try {
            const codeDepartment = Number(req.params.codeDepartment)
            const departmentDelete = await departmentsModel.findOneAndDelete({codeDepartment});
            if (!departmentDelete) {
                res.status(404).json({ message: 'Empleado no encontrado' })
            } else {
                res.status(201).json({ data: departmentDelete, message: 'Departamento eliminado' });
            }

        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar los datos del Departamento.' });
        }
    }
};

export default departmentsController;