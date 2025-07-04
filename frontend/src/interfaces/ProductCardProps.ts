export interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  discount?: boolean;
  discountPercent?: number;
  isNew?: boolean;
}
