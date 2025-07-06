export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  images: string[];
  isNew: boolean;
  discount: boolean;
  discountPercent?: number;
}
