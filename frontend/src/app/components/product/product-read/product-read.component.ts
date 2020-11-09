import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] //Dois pontos( : ) para dizer o tipo
  displayedColumns = ['id', 'name', 'price', 'action']   //Sinal de igual( = ) para atribuir

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products =>{
      this.products = products
      console.log(products)

    })
  }

}
