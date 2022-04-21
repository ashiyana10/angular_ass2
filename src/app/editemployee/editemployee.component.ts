import { Component, OnInit } from '@angular/core';
import { Employee } from '../entity/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employeeservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employee:any;
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    var id=this.route.snapshot.params["id"];
    this.employee=this.employeeService.getEmployee(id);
    console.log(this.employee);
  }
  updateEmployee()
  {
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(["Employees"]);
  }
  cancelEmployee()
  {
    this.router.navigate(["Employees"]);
  }


}
