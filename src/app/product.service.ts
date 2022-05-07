import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  myurl:string='http://localhost:4200/../assets/ProdList.json'
  getProd()
  {
    return this.http2.get(this.myurl);
  }
 

  constructor(private http2:HttpClient) { }
}
