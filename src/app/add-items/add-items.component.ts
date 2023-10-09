import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const ORDER_URL = 'http://54.234.147.254:8083/api/products/addProduct'
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit{

  form: FormGroup;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      productTitle: new FormControl('', ),
      productPrice: new FormControl('', ),
      description: new FormControl('', [Validators.required, Validators.email]),
      productImage: new FormControl('', ),
      id: new FormControl('', ),
      productRating :new FormControl(',')
    });
  }


  onSubmit() {
   console.log(this.form.value)
   this.createProduct()
  }

  createProduct() {
    return this.http.post(ORDER_URL
      ,this.form.value ).subscribe(
        data => {
          console.log(data)
          alert("Product Added Successfully!")
          this.router.navigate(['product'])
        })
  }

}
