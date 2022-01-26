import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';
import { products } from '../mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/v1/products';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    console.log(this.http.get<Product[]>(this.apiUrl));
    return this.http.get<Product[]>(this.apiUrl);
  }
}
