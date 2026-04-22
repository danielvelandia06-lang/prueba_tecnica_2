import {Schema, model} from "mongoose";

const departmentsModels = new Schema({
    codeDepartment:{
        type: Number,
        required: true,
        unique: true,
    },
    
    nameDepartment:{
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true,
    }
},
    {versionKey: false, timestamps: true,},
)

export default model('Departments', departmentsModels);