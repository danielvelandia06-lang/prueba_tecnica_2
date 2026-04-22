import {Schema, model} from "mongoose";

const employeeSchema = new Schema({
    employeeCode:{
        type: Number,
        require: [true, "El codigo es obligatorio"],
        unique: true,
    },

    name:{
        type: String,
        require: [true, "El nombre es obligatorio"],
    },

    lastname1:{
        type: String,
    },

    lastname2:{
        type: String,
    },

    code_department:{
        type: Number,
        require: [true, "El id es necesario ponerlo."],
    }
},
    {versionKey: false, timestamps: true,},
);

export default model('Employee', employeeSchema);