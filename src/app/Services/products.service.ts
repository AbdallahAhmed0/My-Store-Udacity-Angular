import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Products } from '../Models/products';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private httpClient:HttpClient) {
  }

  getAllProducts():Observable<Products[]>{
      
    return this.httpClient.get<Products[]>(`${environment.apiUrl}`);
  }
  
  getProductByID(id: number): Observable<Products> {
    
    return this.httpClient
      .get<Products>(`${environment.apiUrl}/${id}`);
    }



}
