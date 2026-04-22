import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/empleado';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.apiUrl);
  }

  getByDepartment(codeDepartment: number) {
    return this.http.get<any>(
      `${this.apiUrl}/departamento/${codeDepartment}`
    );
  }

  create(emp: any) {
    return this.http.post(this.apiUrl, emp);
  }

  update(id: number, emp: any) {
  return this.http.put(`http://localhost:3000/empleado/${id}`,emp);
}

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
