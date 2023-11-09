import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService){}
  
  cart: {id: number,title:string,price: number, description:string,category: string,image:string,rating: {count:number,rate:number}}[] = [];

  ngOnInit(){
    this.cart = this.cartService.getCart();    
  }

  removeItem(id:number){
    this.cartService.removeCart(id);
    this.cart = this.cartService.getCart();
  }

  buyAll(){
    alert("Order Placed Successfully!!");
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
  }
  
}
