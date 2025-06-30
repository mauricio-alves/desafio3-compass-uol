import { Injectable, NotFoundException  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category.entity";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({ relations: ["products"] });
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: ["products"],
    });

    if (!category) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada.`);
    }

    return category;
  }
}
