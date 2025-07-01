import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { ProductDto } from "./dto/product.dto";

@ApiTags("products")
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: "Retorna todos os produtos" })
  @ApiResponse({ status: 200, description: "Lista de produtos", type: [ProductDto] })
  findAll(): Promise<ProductDto[]> {
    return this.productService.findAll();
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
