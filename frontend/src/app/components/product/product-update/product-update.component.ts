import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private ProductService: ProductService,
    private Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')  //consegue pegar os parametros peloa rota usando o snapshot dentro do mapa de parametros(paramMap)
    this.ProductService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {
    this.ProductService.update(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto atualizado com sucesso!')
      this.Router.navigate(["/products"]);
    })
  }

  cancel(): void {
    this.Router.navigate(["/products"]);
  }
}
