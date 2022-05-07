import { Component, OnInit } from '@angular/core';
import { AcnempService } from '../acnemp.service';

@Component({
  selector: 'app-acnemplist',
  templateUrl: './acnemplist.component.html',
  styleUrls: ['./acnemplist.component.css']
})
export class AcnemplistComponent implements OnInit {

  elist2;
  constructor(private es2:AcnempService) {
    this.es2.getAcnEmp().subscribe((empdata)=>{
      this.elist2=empdata;
    });
   }

  ngOnInit(): void {
  }

}
