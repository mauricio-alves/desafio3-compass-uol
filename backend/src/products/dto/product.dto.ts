import { ApiProperty } from "@nestjs/swagger";
import { CategoryDto } from "../../categories/dto/category.dto";

export class ProductDto {
  @ApiProperty({ example: 1, description: "ID do produto" })
  id: number;

  @ApiProperty({ example: "Camiseta Legal", description: "Título do produto" })
  name: string;

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
    example: `Esta camiseta foi criada com tecidos de alta qualidade. 
Possui costura reforçada, gola canelada e ótimo caimento. Ideal para uso diário ou casual.`,
    description: "Descrição completa do produto, com mais detalhes e parágrafos",
  })
  fullDescription: string[];

  @ApiProperty({
    example: ["L", "XL", "XS"],
    description: "Tamanhos disponíveis",
    type: [String],
  })
  sizes: string[];

  @ApiProperty({
    example: ["roxo", "preto", "amarelo"],
    description: "Cores disponíveis",
    type: [String],
  })
  colors: string[];

  @ApiProperty({ type: CategoryDto })
  category: CategoryDto;

  @ApiProperty({ example: 1, description: "ID da categoria" })
  categoryId: number;

  @ApiProperty({ example: true, description: "Indica se o produto está com desconto" })
  discount: boolean;

  @ApiProperty({ example: 30, description: "Porcentagem de desconto aplicada", required: false })
  discountPercent?: number;

  @ApiProperty({ example: true, description: "Indica se o produto é novo" })
  isNew: boolean;
}
