import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";

export function Products() {
  const [visibleCount, setVisibleCount] = useState(8);
  const { products, error } = useProducts();

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {visibleProducts.map((product) => (
          <div key={product.id} className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
              {product.discount && <span className="absolute top-3 left-3 bg-red-500 text-white text-sm px-2 py-1 rounded-full">-{product.discountPercent ?? 10}%</span>}
              {product.isNew && !product.discount && <span className="absolute top-3 left-3 bg-emerald-500 text-white text-sm px-2 py-1 rounded-full">New</span>}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">Rp {product.price.toLocaleString("id-ID")}</span>
                {product.discount && <span className="text-sm line-through text-gray-400">Rp {(product.price / (1 - (product.discountPercent ?? 10) / 100)).toLocaleString("id-ID")}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-10">
          <button onClick={handleShowMore} className="border border-yellow-900 text-yellow-900 py-2 px-8 rounded hover:bg-yellow-900 hover:text-white transition">
            Show More
          </button>
        </div>
      )}
    </section>
  );
}
