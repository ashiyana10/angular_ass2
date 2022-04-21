import { Component,Input,Output,EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeeService } from '../employeeservice.service';
import { Employee } from '../entity/employee';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent {

  @Input()
  employee!: Employee;

  @Output() refreshEmployeeList:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(private readonly employeeService:EmployeeService,private router:Router)
  {

  }
  editEmployee()
  {
    this.router.navigate(["EditEmployee/"+this.employee.id]);
  }
  deleteEmployee()
    {
        var result=confirm("Are u sure,you want to delete this employee");
        if(result)
        {
          this.employeeService.deleteEmployee(this.employee.id);
          this.refreshEmployeeList.emit(true);
          this.router.navigate(["Employees"]);
        }
    }




}
