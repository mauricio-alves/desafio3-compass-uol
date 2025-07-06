import filtersIcon from "@/assets/icons/filters.svg";
import gridIcon from "@/assets/icons/filter1.svg";
import listIcon from "@/assets/icons/filter2.svg";
import { Products } from "@/components/common/Products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";

export function ProductList() {
  const { id } = useParams();
  const [itemsToShow, setItemsToShow] = useState(16);
  const [filter, setFilter] = useState<"default" | "discount" | "isNew" | "priceLow" | "priceHigh">("default");
  const { products } = useProducts(id, filter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setItemsToShow(value);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as "default" | "discount" | "isNew" | "priceLow" | "priceHigh";
    setFilter(selected);
  };

  const totalCount = products.length;
  const showingEnd = Math.min(itemsToShow, totalCount);

  return (
    <>
      <section className="bg-[var(--color-orange-light)] px-24 py-6 flex items-center justify-between font-poppins mb-16">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-6">
            <img src={filtersIcon} alt="Filter" className="w-4 h-4" />
            <span className="text-large">Filter</span>
          </button>
          <div className="flex items-center gap-6 ml-4">
            <button>
              <img src={gridIcon} alt="Grid view" className="w-5 h-5" />
            </button>
            <button>
              <img src={listIcon} alt="List view" className="w-5 h-5" />
            </button>
          </div>
          <div className="h-10 w-px bg-black mx-3" />
          <span className="text-gray-600 text-normal">
            Showing 1–{showingEnd} of {totalCount} results
          </span>
        </div>
        <div className="flex items-center text-large gap-6">
          <label className="flex items-center gap-4">
            <span className="text-black font-medium">Show</span>
            <input type="number" value={itemsToShow} onChange={handleInputChange} className="w-14 px-2 py-2 border border-gray-300 rounded bg-white text-center text-gray-500" min={1} />
          </label>
          <label className="flex items-center gap-2">
            <span className="text-black font-medium">Sort by</span>
            <select className="px-3 py-2 border border-gray-300 rounded bg-white text-black" value={filter} onChange={handleSelectChange}>
              <option value="default">Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="discount">Discount</option>
              <option value="isNew">New</option>
            </select>
          </label>
        </div>
      </section>
      <section>
        <Products initialCount={itemsToShow} categoryId={id} filter={filter} />
      </section>
    </>
  );
}
