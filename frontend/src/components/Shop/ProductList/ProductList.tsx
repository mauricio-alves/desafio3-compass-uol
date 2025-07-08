import filtersIcon from "@/assets/icons/filters.svg";
import gridIcon from "@/assets/icons/filter1.svg";
import listIcon from "@/assets/icons/filter2.svg";
import { Products } from "@/components/common/Products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import arrow from "@/assets/icons/arrow-right.svg";
import { FilterType, SortType } from "@/types/productFilters";

export function ProductList() {
  const { id } = useParams();
  const [itemsToShow, setItemsToShow] = useState(16);
  const [filter, setFilter] = useState<FilterType>("default");
  const [sort, setSort] = useState<SortType>("default");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const { products } = useProducts(id, filter, sort);
  const totalCount = products.length;
  const showingEnd = Math.min(itemsToShow, totalCount);

  const filterOptions: { label: string; value: FilterType }[] = [
    { label: "Default", value: "default" },
    { label: "Discount", value: "discount" },
    { label: "New", value: "isNew" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setItemsToShow(value);
    }
  };

  const handleFilterChange = (value: FilterType) => {
    setFilter(value);
    setIsFilterDropdownOpen(false);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as SortType);
  };

  return (
    <>
      <section className="bg-[var(--color-orange-light)] px-24 py-6 flex items-center justify-between font-poppins mb-16 relative">
        <div className="flex items-center gap-2 relative">
          <button className="flex items-center gap-2 relative cursor-pointer" onClick={() => setIsFilterDropdownOpen((prev) => !prev)}>
            <img src={filtersIcon} alt="Filter" className="w-4 h-4" />
            <span className="text-large">Filter</span>
            <img src={arrow} alt="Arrow" className="mx-2 inline w-5 h-5 rotate-90" />
          </button>
          {isFilterDropdownOpen && (
            <div className="absolute top-12 left-0 bg-white border border-gray-300 rounded shadow-md z-10 w-40 py-2">
              {filterOptions.map(({ label, value }) => (
                <button key={value} onClick={() => handleFilterChange(value)} className={`w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer ${filter === value ? "font-bold bg-gray-200" : ""}`} role="option" aria-selected={filter === value}>
                  {label}
                </button>
              ))}
            </div>
          )}
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
            <select className="px-3 py-2 border border-gray-300 rounded bg-white text-black cursor-pointer" value={sort} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </label>
        </div>
      </section>
      <section>
        <Products initialCount={itemsToShow} categoryId={id} filter={filter} sort={sort} />
      </section>
    </>
  );
}
