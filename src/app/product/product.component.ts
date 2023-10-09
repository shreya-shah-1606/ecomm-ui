import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: any;

  PRODUCT_URL = 'http://54.234.147.254:8083/api/products/getAllProducts';
   ORDER_URL = 'http://23.21.21.79:8082/api/orders/addOrder'
  constructor(private http: HttpClient,private router: Router) {  }

   ngOnInit() {
    alert(this.PRODUCT_URL)
    this.http.get(this.PRODUCT_URL).subscribe(

        response => this.products = response,
    );
  }

  add(item) {
    console.log(item);
    return this.http.post(this.ORDER_URL
      ,item ).subscribe(
        data => {
          console.log(data)
          alert("Product Added Successfully!")
          this.router.navigate(['order'])
        })
  }

}
