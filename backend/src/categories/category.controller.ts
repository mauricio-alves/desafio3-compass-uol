import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./dto/category.dto";

@ApiTags("categories")
@Controller("categories")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiOperation({ summary: "Retorna todas as categorias" })
  @ApiResponse({ status: 200, description: "Lista de categorias", type: [CategoryDto] })
  async findAll(): Promise<CategoryDto[]> {
    return this.categoryService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Retorna uma categoria pelo ID" })
  @ApiParam({ name: "id", description: "ID da categoria", example: 1 })
  @ApiResponse({ status: 200, description: "Categoria encontrada", type: CategoryDto })
  @ApiResponse({ status: 404, description: "Categoria não encontrada" })
  async findOne(@Param("id") id: string): Promise<CategoryDto> {
    return this.categoryService.findOne(Number(id));
  }
}
