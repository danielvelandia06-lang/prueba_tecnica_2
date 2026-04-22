import 'dotenv/config';
import dns from 'node:dns';
import express from 'express';
import cors from 'cors';
import connectDB  from './config/db.js';
import employeeRouter from './routers/employees.js';
import departmentsRouter from './routers/departments.js'
import employeesDepartmentrouter from './routers/employeesDepartment.js';


const server = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
}

connectDB();
server.use(cors());
server.use(express.json());

server.use(employeesDepartmentrouter);
server.use('/empleado', employeeRouter);
server.use('/departamento', departmentsRouter);


server.get('/',(req,res)=>{
    res.send('Hello World!');
})

server.listen(PORT, ()=>{
    console.info(`Server conection online: ${PORT}`);
});