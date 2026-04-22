import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employees';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class EmployeesComponent {
  employees: any[] = [];
  departments: any[] = [];

  selectedDepartment: any = null;

  newEmp: any = {
    employeeCode: 0,
    name: '',
    lastname1: '',
    lastname2: '',
    code_department: 0,
  };

  editing = false;
  editingId: number | null = null;

  loading = false;

  constructor(
    private empService: EmployeeService,
    private cdr: ChangeDetectorRef,
  ) {}

  loadEmployees() {
    this.loading = true;

    this.empService.getAll().subscribe({
      next: (resp) => {
        this.employees = [...(resp.data || resp)];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  // 🔥 Cargar por departamento
  loadByDepartment(dept: any) {
    this.selectedDepartment = dept;
    this.loading = true;
    this.employees = [];

    this.empService.getByDepartment(dept.codeDepartment).subscribe({
      next: (resp) => {
        this.employees = [...resp.data];
        this.cdr.detectChanges();
        // this.employees = [...(resp.data || [])];
        this.loading = false;
        // this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  save() {
    const data = {
      employeeCode: Number(this.newEmp.employeeCode),
      name: this.newEmp.name,
      lastname1: this.newEmp.lastname1,
      lastname2: this.newEmp.lastname2,
      codeDepartment: Number(this.newEmp.code_department), // 🔥 unificado
    };

    // 🔴 VALIDACIONES
    if (!data.employeeCode) {
      alert('El código del empleado es obligatorio');
      return;
    }

    if (!data.name || !data.lastname1 || !data.lastname2) {
      alert('Faltan datos obligatorios');
      return;
    }

    // ======================================================
    // 🔥 MODO UPDATE
    // ======================================================
    if (this.editing && this.editingId !== null) {
      this.empService.update(this.editingId, data).subscribe({
        next: () => {
          this.resetForm();
          this.loadEmployees();
        },
        error: (err) => console.error('ERROR UPDATE:', err),
      });
    }

    // ======================================================
    // 🔥 MODO CREATE
    // ======================================================
    else {
      this.empService.create(data).subscribe({
        next: () => {
          this.resetForm();
          this.loadEmployees();
        },
        error: (err) => console.error('ERROR CREATE:', err),
      });
    }
  }

  // 🔥 Editar
  edit(emp: any) {
    this.newEmp = { ...emp };
    this.editing = true;
    this.editingId = emp.employeeCode;
  }

  // update() {
  //   this.empService.update(this.editingId, this.newEmp).subscribe({
  //     next: () => {
  //       this.resetForm();
  //       this.loadEmployees();
  //     },
  //     error: (err) => console.error(err)
  //   });
  // }

  // 🔥 Eliminar
  delete(id: number) {
    this.empService.delete(id).subscribe(() => {
      this.refresh();
    });
  }

  // 🔥 Refrescar vista
  refresh() {
    if (this.selectedDepartment) {
      this.loadByDepartment(this.selectedDepartment);
    }
  }

  resetForm() {
    this.newEmp = {
      employeeCode: 0,
      name: '',
      lastname1: '',
      lastname2: '',
      codeDepartment: 0,
    };

    this.editing = false;
    this.editingId = null;
  }
}
