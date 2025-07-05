import { Features } from "@/components/common/Features";
import { BannerShop } from "@/components/Shop/BannerShop";
import { ProductList } from "@/components/Shop/ProductList";

export function Shop() {
  return (
    <>
      <BannerShop />
      <ProductList />
      <Features />
    </>
  );
}
