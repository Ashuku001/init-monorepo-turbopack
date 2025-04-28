import { Injectable } from '@nestjs/common';
import type { CreateProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  createProduct(productData: CreateProductRequest) {
    const newProduct: Product = { id: Math.random().toString().substring(8), ...productData };
    this.products.push(newProduct);
    return newProduct;
  }

  getProducts() {
    return this.products;
  }
}
