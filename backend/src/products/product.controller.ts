import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { ProductDto } from "./dto/product.dto";

@ApiTags("products")
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: "Retorna todos os produtos com filtros opcionais" })
  @ApiQuery({ name: "categoryId", required: false, type: Number, description: "ID da categoria" })
  @ApiQuery({ name: "discount", required: false, type: Boolean, description: "Filtrar produtos com desconto" })
  @ApiQuery({ name: "isNew", required: false, type: Boolean, description: "Filtrar produtos novos" })
  @ApiResponse({ status: 200, description: "Lista de produtos", type: [ProductDto] })
  findAll(@Query("categoryId") categoryId?: number, @Query("discount") discount?: boolean, @Query("isNew") isNew?: boolean): Promise<ProductDto[]> {
    return this.productService.findAll({ categoryId, discount, isNew });
  }

  @Get("category/:id")
  @ApiOperation({ summary: "Retorna produtos por categoria" })
  @ApiParam({ name: "id", description: "ID da categoria", example: 1 })
  @ApiResponse({ status: 200, description: "Lista de produtos filtrados por categoria", type: [ProductDto] })
  findByCategory(@Param("id") id: string): Promise<ProductDto[]> {
    return this.productService.findByCategory(Number(id));
  }

  @Get(":id")
  @ApiOperation({ summary: "Retorna um produto pelo ID" })
  @ApiParam({ name: "id", description: "ID do produto", example: 1 })
  @ApiResponse({ status: 200, description: "Produto encontrado", type: ProductDto })
  @ApiResponse({ status: 404, description: "Produto não encontrado" })
  findOne(@Param("id") id: string): Promise<ProductDto> {
    return this.productService.findOne(Number(id));
  }
}
