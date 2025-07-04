import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { ProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  private toDto(product: Product): ProductDto {
    return {
      id: product.id,
      title: product.title,
      price: Number(product.price),
      images: product.images,
      rating: product.rating,
      reviewCount: product.reviewCount,
      description: product.description,
      sizes: product.sizes,
      colors: product.colors,
      category: {
        id: product.category.id,
        name: product.category.name,
        image: product.category.image,
      },
      categoryId: product.category.id,
      discount: product.discount,
      isNew: product.isNew,
    };
  }

  async findAll(filters: { categoryId?: number; discount?: boolean; isNew?: boolean }): Promise<ProductDto[]> {
    const query = this.productRepository.createQueryBuilder("product").leftJoinAndSelect("product.category", "category");

    if (filters.categoryId) {
      query.andWhere("product.categoryId = :categoryId", { categoryId: filters.categoryId });
    }

    if (typeof filters.discount !== "undefined") {
      query.andWhere("product.discount = :discount", { discount: filters.discount });
    }

    if (typeof filters.isNew !== "undefined") {
      query.andWhere("product.isNew = :isNew", { isNew: filters.isNew });
    }

    const products = await query.getMany();
    return products.map((product) => this.toDto(product));
  }

  async findByCategory(categoryId: number): Promise<ProductDto[]> {
    const products = await this.productRepository.find({
      where: { category: { id: categoryId } },
      relations: ["category"],
    });
    return products.map((p) => this.toDto(p));
  }

  async findOne(id: number): Promise<ProductDto> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ["category"],
    });

    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
    }

    return this.toDto(product);
  }
}
