import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  elist;
  constructor(private es:EmployeeService) {
    this.es.getEmp().subscribe((empdata)=>{
      this.elist=empdata;
    });
   }
  
  ngOnInit(): void {
  }

}
