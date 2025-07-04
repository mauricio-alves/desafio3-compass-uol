import { Features } from "@/components/common/Features";
import { Products } from "@/components/common/Products";
import { BannerShop } from "@/components/Shop/BannerShop";

export function Shop() {
  return (
    <>
      <BannerShop />
      <Products initialCount={16} />
      <Features />
    </>
  );
}
