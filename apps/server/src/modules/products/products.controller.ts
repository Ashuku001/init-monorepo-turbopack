import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { CreateProductRequest } from '@repo/types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() productData: CreateProductRequest) {
    return this.productsService.createProduct(productData);
  }

  @Get()
  async getProducts() {
    return this.productsService.getProducts();
  }
}
