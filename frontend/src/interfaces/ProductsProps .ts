export interface ProductsProps {
  title?: string;
  initialCount?: number;
  categoryId?: string;
  filter?: "default" | "discount" | "isNew" | "priceLow" | "priceHigh";
}
