import { Component, Input, computed, inject, numberAttribute } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input({ transform: numberAttribute }) id: number = 0;
  
  private productSrv = inject(ProductService);
  productValue = computed(() => this.productSrv.products().find(x => x.Id == this.id) ?? { Id: 0, Name: '', Price: 0 });

  updateProduct(pp: number) {
    if (this.productValue()) {
      const newProduct: Product = { ...this.productValue(), Price: pp };
      this.productSrv.updateProduct(newProduct);
    }
  }
}
