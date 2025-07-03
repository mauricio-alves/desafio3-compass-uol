export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  images: string[];
  isNew: boolean;
  discount: boolean;
  discountPercent?: number;
}
