# prueba_tecnica_2
# 🏢 Sistema de Gestión de Empleados y Departamentos

Aplicación web desarrollada con Angular (Frontend), Node.js + Express (Backend) y MongoDB (Base de datos), que permite gestionar empleados y departamentos dentro de una organización.

---

## 🚀 Funcionalidades

### 👥 Empleados
- Crear empleados
- Listar empleados
- Editar empleados
- Eliminar empleados
- Asignación a departamentos
- Visualización de empleados por departamento

### 🏢 Departamentos
- Crear departamentos
- Listar departamentos
- Editar departamentos
- Eliminar departamentos
- Relación con empleados

---

## 🧱 Tecnologías utilizadas

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3
- RxJS

### Backend
- Node.js
- Express.js

### Base de datos
- MongoDB
- Mongoose

---

## 📁 Estructura del proyecto

/frontend
  ├── components
  │     ├── departments
  │     └── employees
  ├── services
  ├── models

/backend
  ├── controllers
  ├── routes
  ├── models
  ├── server.js

---

## 🔌 Conexión Backend

El backend corre en:

http://localhost:3000

### Endpoints

#### Empleados
- GET /empleado
- GET /empleado/departamento/:codeDepartment
- POST /empleado
- PUT /empleado/:employeeCode
- DELETE /empleado/:employeeCode

#### Departamentos
- GET /departamento
- POST /departamento
- PUT /departamento/:codeDepartment
- DELETE /departamento/:codeDepartment

---

## ⚙️ Instalación

### 1. Clonar repositorio
git clone https://github.com/usuario/proyecto.git

---

### 2. Backend
cd backend
npm install
npm start

---

### 3. Frontend
cd frontend
npm install
ng serve

---

## 🌐 Ejecución

Frontend:
http://localhost:4200

Backend:
http://localhost:3000

---

## 🔄 Relación de datos

- Cada empleado pertenece a un departamento mediante `codeDepartment`
- Los empleados pueden filtrarse por departamento
- Relación manejada directamente en MongoDB

---

## 📌 Características importantes

- CRUD completo
- API REST
- Validaciones en frontend y backend
- Actualización dinámica de datos
- Arquitectura modular en Angular

---

## 🧪 Pruebas

Se recomienda usar Postman para validar:

- Creación de empleados
- Creación de departamentos
- Listado general
- Filtros por departamento
- Actualización de registros
- Eliminación de registros

---

## 🛠️ Posibles mejoras

- Angular Reactive Forms
- Paginación de empleados
- Filtros avanzados
- Autenticación JWT
- Dashboard administrativo
- Angular Material UI

---

## 👨‍💻 Autor

Desarrollado por: [Tu Nombre]

Proyecto académico / portafolio personal

---

## 📄 Licencia

Uso educativo y libre para mejoras.
