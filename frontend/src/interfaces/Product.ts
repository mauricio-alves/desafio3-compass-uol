import { Category } from "./Category";

export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  fullDescription: string[];
  sizes: string[];
  colors: string[];
  oldPrice?: number;
  isNew: boolean;
  discount: boolean;
  discountPercent?: number;
  category: Category;
}
