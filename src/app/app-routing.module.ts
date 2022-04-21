import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {path:"",component:EmployeeListComponent},
  {path:"Employees",component:EmployeeListComponent},
  {path:"AddEmployee",component:AddemployeeComponent},
  {path:"EditEmployee/:id",component:EditemployeeComponent},
  {path:"**",redirectTo:"Employees"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
