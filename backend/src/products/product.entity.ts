import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "../categories/category.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("decimal")
  price: number;

  @Column("simple-array")
  images: string[];

  @Column("float")
  rating: number;

  @Column()
  reviewCount: number;

  @Column("text")
  description: string;

  @Column("simple-array")
  sizes: string[];

  @Column("simple-array")
  colors: string[];

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
