import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = signal<Product[]>([]);
  constructor() {
    this.products.set([
      { Id: 1, Name: 'Sample-1', Price: 2450 },
      { Id: 2, Name: 'Sample-2', Price: 456 },
      { Id: 3, Name: 'Sample-3', Price: 789 },
      { Id: 4, Name: 'Sample-4', Price: 9056 },
      { Id: 5, Name: 'Sample-5', Price: 3409 }
    ]);
  }

  getProduct(id: number) {
    return this.products().find(x => x.Id == id)?? null;
  }

  updateProduct(product: Product) {
    const index=this.products().findIndex(x=>x.Id==product.Id);
    if(index>=0){
      this.products.mutate(p=>p[index]={...product})
    }
  }
}
