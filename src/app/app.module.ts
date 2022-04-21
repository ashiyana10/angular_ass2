import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
//import { CardModule } from "primeng/card";
import { FormsModule } from '@angular/forms';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';
@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeedetailComponent,
    EmployeeListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
