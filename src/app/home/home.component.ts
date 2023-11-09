import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private productService: ProductService, private cartService: CartService, private router: Router){}
  
  data: {id: number,title:string,price: number, description:string,category: string,image:string,rating: object}[] = [];
  cart: {id: number,title:string,price: number, description:string,category: string,image:string,rating: object}[] = [];

  ngOnInit(){
    this.cart = this.cartService.getCart();

    this.productService.getProducts().subscribe((data:any)=>{
      this.data = data;
    },(error)=>{
      console.log(error);
    })
    console.log(this.data);
    
  }

  addCart(id:number){
    let check = this.cart.find((ele)=> ele.id===id);
    let item = this.data.find((ele)=> ele.id===id);

    if(check){
      this.router.navigate(['/cart'])
    }else{
      this.cartService.addCart(item);
    }
  }

  checkCart(id:number){
    let check = this.cart.find((ele)=> ele.id===id);
    if(check){
      return 'Go to Cart'
    }else{
      return 'Add to Cart'
    }
  }
}
