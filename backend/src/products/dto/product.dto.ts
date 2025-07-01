import { ApiProperty } from "@nestjs/swagger";
import { CategoryDto } from "../../categories/dto/category.dto";

export class ProductDto {
  @ApiProperty({ example: 1, description: "ID do produto" })
  id: number;

  @ApiProperty({ example: "Camiseta Legal", description: "Título do produto" })
  title: string;

  @ApiProperty({ example: 59.9, description: "Preço do produto" })
  price: number;

  @ApiProperty({
    example: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
    description: "URLs das imagens do produto",
    type: [String],
  })
  images: string[];

  @ApiProperty({ example: 4.5, description: "Avaliação média do produto" })
  rating: number;

  @ApiProperty({ example: 123, description: "Número de avaliações do produto" })
  reviewCount: number;

  @ApiProperty({ example: "Uma camiseta muito confortável", description: "Descrição do produto" })
  description: string;

  @ApiProperty({
    example: ["P", "M", "G"],
    description: "Tamanhos disponíveis",
    type: [String],
  })
  sizes: string[];

  @ApiProperty({
    example: ["vermelho", "azul", "preto"],
    description: "Cores disponíveis",
    type: [String],
  })
  colors: string[];

  @ApiProperty({ type: CategoryDto })
  category: CategoryDto;
}
