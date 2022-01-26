import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() text!: string;
  @Input() product!: Product;
  @Output() onAddToCart: EventEmitter<Cart> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.product.quantity <= 0) {
      alert("Product is out of stock");
      return;
    }

    const newCart: Cart = {
      product_id: this.product._id,
      price: this.product.price,
      quantity: 1, // set to 1 by default for now
      name: this.product.name,
      status: 'active'
    };

    this.onAddToCart.emit(newCart);
  }
}
