import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
   myurl:string='http://localhost:4200/../assets/EmpList.json'
  
  getEmp()
  {
    return this.http.get(this.myurl);
  }

  constructor(private http:HttpClient) { }
}
