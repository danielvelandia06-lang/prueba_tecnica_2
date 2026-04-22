import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { DepartmentsComponent } from './components/pages/departments/departments';
import { EmployeesComponent } from './components/pages/employees/employees';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio' },
  { path: 'departamento', component: DepartmentsComponent, title: 'Departamentos' },
  { path: 'empleado', component: EmployeesComponent, title:'Empleados' }
];
