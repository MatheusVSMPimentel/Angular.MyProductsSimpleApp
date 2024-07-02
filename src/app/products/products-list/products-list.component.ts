import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, registerLocaleData, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, TitleCasePipe,NgSwitch, NgSwitchCase, NgIf, NgFor],
  templateUrl: './products-list.component.html',
  styles: ``
})
export class ProductsListComponent implements OnInit{
  public products: Product[] =[];
  constructor(private productService: ProductService) {  
    
    
  }
  ngOnInit(): void {
    this.productService.obterProdutos().subscribe( products =>{
      this.products = products;
      console.log(products)

    },
    error => console.error(error)
    )
  }

}
