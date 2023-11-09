import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = [];

  getCart(){
    return this.cart;
  }

  addCart(item: any){
    this.cart.push(item);
  }

  removeCart(id:number){
    this.cart = this.cart.filter((ele:any)=> ele.id!==id);
  }

  clearCart(){
    this.cart = [];
  }
}
