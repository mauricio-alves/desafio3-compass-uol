import { Banner } from "@/components/Home/Banner";
import { Categories } from "@/components/Home/Categories";
import { Features } from "@/components/common/Features";
import { Products } from "@/components/common/Products";

export function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Products initialCount={8} />
      <Features />
    </>
  );
}
