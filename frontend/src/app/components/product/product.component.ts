import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from 'src/app/models/Cart';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(cart: Cart) {
    this.cartService.addToCart(cart).subscribe((cart: any) => (console.log(cart)));
  }
}
