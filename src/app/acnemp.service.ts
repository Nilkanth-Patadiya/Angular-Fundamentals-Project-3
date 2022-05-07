import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcnempService {
  //myurl:string='http://localhost:4200/../assets/EmpList2.json'
  myurl: string = 'https://myangularproject-49e63.firebaseio.com/Employees.json'

  constructor(private http: HttpClient) { }
  
  getAcnEmp() {
    return this.http.get(this.myurl);
  }



}
