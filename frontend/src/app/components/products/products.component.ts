import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { products } from '../../mock-products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
