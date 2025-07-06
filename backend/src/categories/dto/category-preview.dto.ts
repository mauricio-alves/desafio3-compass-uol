import { ApiProperty } from "@nestjs/swagger";

export class CategoryPreviewDto {
  @ApiProperty({ example: 1, description: "ID da categoria" })
  id: number;

  @ApiProperty({ example: "Eletrônicos", description: "Nome da categoria" })
  name: string;

  @ApiProperty({ example: "https://example.com/image.jpg", description: "Imagem da categoria" })
  image: string;
}
