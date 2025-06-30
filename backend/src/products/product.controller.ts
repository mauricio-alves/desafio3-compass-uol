import { Controller, Get, Param } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get("category/:id")
  findByCategory(@Param("id") id: string) {
    return this.productService.findByCategory(Number(id));
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(Number(id));
  }
}
