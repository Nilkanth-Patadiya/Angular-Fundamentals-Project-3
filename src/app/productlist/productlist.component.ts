import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  plist;

  constructor(private ps: ProductService) {

  }

  ngOnInit(): void {
    this.ps.getProd().subscribe((pd) => {
      this.plist = pd;
    });

  }

}
