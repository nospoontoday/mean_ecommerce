import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

import { Product } from '../../models/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => this.products = products);
  }

}
