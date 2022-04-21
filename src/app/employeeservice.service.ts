import { Injectable } from '@angular/core';
import { Employee } from './entity/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  allEmployees: Employee[] = [
    {
      "id": "1",
      "firstname": "ashu",
      "lastname": "halvadiya",
      "age": 21,
      "designation": "software engineer"
    }
  ];

  getAllEmployee():Employee[]
  {
    return this.allEmployees;
  }
  addEmployee(employee:Employee)
  {
    this.allEmployees.push(employee);
  }
  updateEmployee(employee:Employee)
  {
    var updateEmployee:any =this.allEmployees.find(emp => emp.id == employee.id);


    updateEmployee.firstname=employee.firstname;
    updateEmployee.lastname=employee.lastname;
    updateEmployee.age=employee.age;
    updateEmployee.designation=employee.designation;
  }
  deleteEmployee(id:string)
  {
    this.allEmployees=this.allEmployees.filter(employee=>employee.id!=id);
  }

  getEmployee(id:string):Employee|undefined{
    return this.allEmployees.find(emp=>emp.id==id);
  }
}
