import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { ProductCard } from "../ProductCard";
import { InitialCountProps } from "@/interfaces/InitialCountProps_";

export function Products({ initialCount = 8 }: InitialCountProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const { products, loading, error } = useProducts();

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + initialCount);
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(initialCount, prev - initialCount));
  };

  const visibleProducts = products.slice(0, visibleCount);

  return loading ? (
    <section className="py-16">
      <h2 className="text-heading-1 font-poppins font-bold text-center mb-6">Our Products</h2>
      <p className="text-center text-gray-500">Carregando...</p>
    </section>
  ) : error ? (
    <section className="py-16">
      <h2 className="text-heading-1 font-poppins font-bold text-center mb-6">Our Products</h2>
      <p className="text-center text-[var(--color-red)]">{error}</p>
    </section>
  ) : (
    <section className="pb-16">
      <h2 className="text-heading-1 font-poppins font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-4 gap-8 px-25">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-6">
        {visibleCount > initialCount && (
          <button onClick={handleShowLess} className="border border-[var(--color-yellow)] text-[var(--color-yellow)] py-3 px-20 rounded hover:bg-[var(--color-yellow)] hover:text-white transition cursor-pointer font-poppins">
            Show Less
          </button>
        )}
        {visibleCount < products.length && (
          <button onClick={handleShowMore} className="border border-[var(--color-yellow)] text-[var(--color-yellow)] py-3 px-20 rounded hover:bg-[var(--color-yellow)] hover:text-white transition cursor-pointer font-poppins">
            Show More
          </button>
        )}
      </div>
    </section>
  );
}
