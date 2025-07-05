export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  discount?: boolean;
  discountPercent?: number;
  isNew?: boolean;
}
