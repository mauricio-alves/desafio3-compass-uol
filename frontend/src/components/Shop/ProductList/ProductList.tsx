import filtersIcon from "@/assets/icons/filters.svg";
import gridIcon from "@/assets/icons/filter1.svg";
import listIcon from "@/assets/icons/filter2.svg";
import { Products } from "@/components/common/Products";
import { useParams } from "react-router-dom";

export function ProductList() {
  const { id } = useParams();

  return (
    <>
      <section className="bg-[var(--color-orange-light)] px-8 py-4 flex items-center justify-between font-poppins text-sm">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <img src={filtersIcon} alt="Filter" className="w-4 h-4" />
            <span className="font-medium">Filter</span>
          </button>
          <div className="flex items-center gap-2">
            <button>
              <img src={gridIcon} alt="Grid view" className="w-5 h-5" />
            </button>
            <button>
              <img src={listIcon} alt="List view" className="w-5 h-5" />
            </button>
          </div>
          <div className="h-5 w-px bg-gray-300 mx-3" />
          <span className="text-gray-600">Showing 1–16 of 32 results</span>
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <span className="text-black font-medium">Show</span>
            <input type="number" value={16} readOnly className="w-12 px-2 py-1 border border-gray-300 rounded bg-white text-center text-gray-500" />
          </label>
          <label className="flex items-center gap-2">
            <span className="text-black font-medium">Short by</span>
            <select className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-500">
              <option value="default">Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </label>
        </div>
      </section>
      <section>
        <Products initialCount={16} categoryId={id} />
      </section>
    </>
  );
}
