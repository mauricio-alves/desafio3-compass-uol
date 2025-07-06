import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { ProductPreviewDto } from "./dto/product-preview.dto";

@ApiTags("products")
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: "Listar todos os produtos com filtros opcionais" })
  @ApiResponse({
    status: 200,
    description: "Lista de produtos",
    type: ProductPreviewDto,
    isArray: true,
  })
  @ApiQuery({ name: "categoryId", required: false, type: Number, description: "Filtrar produtos por ID da categoria" })
  @ApiQuery({ name: "discount", required: false, type: Boolean, description: "Filtrar produtos com desconto (true/false)" })
  @ApiQuery({ name: "isNew", required: false, type: Boolean, description: "Filtrar produtos novos (true/false)" })
  @ApiQuery({ name: "orderBy", required: false, type: String, description: "Campo para ordenar (ex: price)" })
  @ApiQuery({ name: "order", required: false, enum: ["asc", "desc"], description: "Direção da ordenação" })
  async findAll(@Query("categoryId") categoryId?: number, @Query("discount") discount?: boolean, @Query("isNew") isNew?: boolean, @Query("orderBy") orderBy?: string, @Query("order") order?: "asc" | "desc"): Promise<ProductPreviewDto[]> {
    const products = await this.productService.findAll({ categoryId, discount, isNew, orderBy, order });

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
