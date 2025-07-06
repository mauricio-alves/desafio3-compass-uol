import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "../categories/category.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

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

  @Column({ default: false })
  discount: boolean;

  @Column({ type: "float", nullable: true })
  discountPercent?: number;

  @Column({ default: false })
  isNew: boolean;

  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  category: Category;
}
