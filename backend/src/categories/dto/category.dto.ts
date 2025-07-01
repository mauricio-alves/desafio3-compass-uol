import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CategoryDto {
  @ApiProperty({ example: 1, description: "ID da categoria" })
  id: number;

  @ApiProperty({ example: "Eletrônicos", description: "Nome da categoria" })
  name: string;

  @ApiPropertyOptional({
    description: "Lista de produtos desta categoria",
    type: () => [ProductSummaryDto],
  })
  products?: ProductSummaryDto[];
}

class ProductSummaryDto {
  @ApiProperty({ example: 10, description: "ID do produto" })
  id: number;

  @ApiProperty({ example: "Smartphone XYZ", description: "Título do produto" })
  title: string;
}
