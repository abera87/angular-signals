import { Component, Input, computed, numberAttribute } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input({ transform: numberAttribute }) id: number = 0;

  productValue = computed(()=>this.productSrv.products()[this.id - 1]);


  constructor(private productSrv: ProductService) { }  

  updateProduct(pp: number) {
    if (this.productValue()) {
      const newProduct: Product = { ...this.productValue(), Price: pp };
      this.productSrv.updateProduct(newProduct);
    }
  }
}
