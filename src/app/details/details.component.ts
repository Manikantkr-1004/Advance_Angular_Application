import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  data: {id: number,title:string,price: number, description:string,category: string,image:string,rating: {count:number,rate:number}} | null = null;

  constructor(private productService: ProductService,private router: ActivatedRoute){}

  ngOnInit(){
    this.router.params.subscribe((params)=>{

      const Id = +params['id'];

      this.productService.getProducts().subscribe((data:any)=>{
        const finding = data.find((ele:any)=> ele.id=== +Id);
        this.data = finding;
        console.log(finding);
        
      },error=>{
        console.log(error);
      })

    })

  }

}
