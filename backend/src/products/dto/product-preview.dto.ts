// src/products/dto/product-preview.dto.ts
import { ApiProperty } from "@nestjs/swagger";

export class ProductPreviewDto {
  @ApiProperty({ example: 1, description: "ID do produto" })
  id: number;

  @ApiProperty({ example: "Camiseta Legal", description: "Título do produto" })
  title: string;

  @ApiProperty({
    example: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
    description: "URLs das imagens do produto",
    type: [String],
  })
  images: string[];

  @ApiProperty({ example: "Uma camiseta muito confortável", description: "Descrição do produto" })
  description: string;

  @ApiProperty({ example: 59.9, description: "Preço do produto" })
  price: number;

  @ApiProperty({ example: true, description: "Indica se o produto está com desconto" })
  discount: boolean;

  @ApiProperty({ example: 30, description: "Porcentagem de desconto aplicada", required: false })
  discountPercent?: number;

  @ApiProperty({ example: true, description: "Indica se o produto é novo" })
  isNew: boolean;
}
