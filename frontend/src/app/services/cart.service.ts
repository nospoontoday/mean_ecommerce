import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cart } from '../models/Cart';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/v1/cart/create-or-update';

  constructor(private http: HttpClient) { }

  // addToCart(cart: Cart): Observable<Cart> {
  //   return this.http.post<Cart>(this.apiUrl, cart, httpOptions)
  // }

  addToCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, cart);
  }
}

