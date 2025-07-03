import { ProductProps } from "./ProductProps";

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
  products: ProductProps[];
}
