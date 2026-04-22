import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DepartmentService {

  private apiUrl = 'http://localhost:3000/departamento';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(dept: any) {
    return this.http.post(this.apiUrl, dept);
  }

  update(id: number, dept: any) {
    console.log(id, dept);
    return this.http.put(`${this.apiUrl}/${id}`, dept);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
