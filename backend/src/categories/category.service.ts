import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CategoryDto } from "./dto/category.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  private toDto(category: Category): CategoryDto {
    return {
      id: category.id,
      name: category.name,
      image: category.image,
      products: category.products?.map((p) => ({ id: p.id, title: p.title })) || [],
    };
  }

  async findAll(): Promise<CategoryDto[]> {
    const categories = await this.categoryRepository.find({ relations: ["products"] });
    return categories.map((category) => this.toDto(category));
  }

  async findOne(id: number): Promise<CategoryDto> {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: ["products"],
    });

    if (!category) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada.`);
    }

    return this.toDto(category);
  }
}
