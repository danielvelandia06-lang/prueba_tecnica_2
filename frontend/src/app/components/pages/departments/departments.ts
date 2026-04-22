import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { DepartmentService } from '../../../services/departments';
import { EmployeeService } from '../../../services/employees';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})

export class DepartmentsComponent implements OnInit {

  departments: any[] = [];
  employees: any[] = [];
  selectedDepartment: any = null;
  loadingEmployees = false;

  constructor(
    private deptService: DepartmentService,
    private empService: EmployeeService,
    private cdr: ChangeDetectorRef
  ) {}

  loadEmployees(dept: any) {
    this.selectedDepartment = dept;
    this.loadingEmployees = true;
    this.employees = [];

    const code = Number(dept.codeDepartment);

    this.empService.getByDepartment(code).subscribe({
      next: (resp) => {
        // this.employees = resp?.data || [];
        this.loadingEmployees = false;
        this.employees = [...resp.data];
        this.cdr.detectChanges(); // 🔥 fuerza render inmediato
      },
      error: (err) => {
        console.error(err);
        this.loadingEmployees = false;
      }
    });
  }

  newDept = {
    codeDepartment: 0,
    nameDepartment: ''
  };

  editing: boolean = false;
  editingId: number | null = null;


  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
  this.deptService.getAll().subscribe((data: any) => {
    this.departments = Array.isArray(data) ? data : data.data || [];
  });
}

  // loadDepartments() {
  //   this.deptService.getAll().subscribe({
  //     next: (data) => this.departments = data,
  //     error: (err) => console.error('Error cargando departamentos', err)
  //   });
  // }

  save() {
  if (this.editing && this.editingId !== null) {

    const { nameDepartment } = this.newDept;

    this.deptService.update(this.editingId, { nameDepartment })
      .subscribe({
        next: (resp) => {
          console.log('OK:', resp);
          this.resetForm();
          this.loadDepartments();
        },
        error: (err) => console.error('ERROR:', err)
      });

  } else {

    this.deptService.create(this.newDept).subscribe(() => {
      this.resetForm();
      this.loadDepartments();
    });

  }
}


  edit(dept: any) {
  console.log('EDITANDO', dept);

  this.newDept = { ...dept };
  this.editing = true;
  this.editingId = dept.codeDepartment;
}

delete(id: number) {
  console.log('ELIMINANDO ID:', id);

  this.deptService.delete(id).subscribe({
    next: () => {
      // 🔥 actualización inmediata en UI
      this.departments = this.departments.filter(d => d.codeDepartment !== id);

      // 🔄 opcional (sincronizar con backend)
      this.loadDepartments();
    },
    error: (err) => console.error('Error eliminando', err)
  });
}

  resetForm() {
    this.newDept = { codeDepartment: 0, nameDepartment: '' };
    this.editing = false;
    this.editingId = null;
  }
}
