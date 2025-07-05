import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { ProductPreviewDto } from "./dto/product-preview.dto";

@ApiTags("products")
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: "Listar todos os produtos" })
  @ApiResponse({
    status: 200,
    description: "Lista de produtos",
    type: ProductPreviewDto,
    isArray: true,
  })
  @Get()
  async findAll(@Query("categoryId") categoryId?: number, @Query("discount") discount?: boolean, @Query("isNew") isNew?: boolean): Promise<ProductPreviewDto[]> {
    const products = await this.productService.findAll({ categoryId, discount, isNew });

    return products.map(({ id, name, images, description, price, discount: hasDiscount, discountPercent, isNew: isProductNew }) => ({
      id,
      name,
      images,
      description,
      price,
      discount: hasDiscount,
      discountPercent, 
      isNew: isProductNew,
    }));
  }

  @ApiOperation({ summary: "Listar produtos por categoria" })
  @ApiResponse({
    status: 200,
    description: "Lista de produtos por categoria",
    type: ProductPreviewDto,
    isArray: true,
  })
  @Get("category/:id")
  async findByCategory(@Param("id") categoryId: number): Promise<ProductPreviewDto[]> {
    const products = await this.productService.findByCategory(categoryId);

    return products.map(({ id, name, images, description, price, discount: hasDiscount, discountPercent, isNew: isProductNew }) => ({
      id,
      name,
      images,
      description,
      price,
      discount: hasDiscount,
      discountPercent,
      isNew: isProductNew,
    }));
  }
}
