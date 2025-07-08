import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { ProductCard } from "../ProductCard";
import { ProductsProps } from "@/interfaces/ProductsProps";
import ReactPaginate from "react-paginate";
import { ShowMore } from "../ShowMore";

export function Products({ initialCount = 8, categoryId, title, filter }: ProductsProps) {
  const [visibleCount] = useState(initialCount);
  const { products, loading, error } = useProducts(categoryId, filter);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = initialCount;
  const offset = currentPage * itemsPerPage;
  const paginatedProducts = products.slice(offset, offset + itemsPerPage);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const visibleProducts = products.slice(0, visibleCount);
  const showPagination = !!categoryId;
  const showButtons = !categoryId;

  return loading ? (
    <section className="py-16">
      <h2 className="text-heading-1 font-poppins font-bold text-center mb-6">{title}</h2>
      <p className="text-center text-gray-500">Carregando...</p>
    </section>
  ) : error ? (
    <section className="py-16">
      <h2 className="text-heading-1 font-poppins font-bold text-center mb-6">{title}</h2>
      <p className="text-center text-[var(--color-red)]">{error}</p>
    </section>
  ) : (
    <section className="pb-16">
      <h2 className="text-heading-1 font-poppins font-bold text-center mb-6">{title}</h2>
      <div className="grid grid-cols-4 gap-8 px-25">
        {(showPagination ? paginatedProducts : visibleProducts).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {showButtons && <ShowMore />}
      {showPagination && (
        <div className="mt-10 mb-8 flex justify-center">
          <ReactPaginate pageCount={Math.ceil(products.length / itemsPerPage)} pageRangeDisplayed={3} marginPagesDisplayed={1} onPageChange={handlePageChange} containerClassName="flex items-center justify-center gap-10 mt-8 font-poppins text-large" pageClassName="rounded-md bg-[var(--color-orange-light)] text-black px-[26px] py-4 cursor-pointer hover:bg-[#e9e1d9] transition" pageLinkClassName="w-full h-full text-center" activeClassName="bg-[var(--color-yellow)] text-white" previousClassName="rounded-md bg-[var(--color-orange-light)] text-black px-[30px] py-4 cursor-pointer hover:bg-[#e9e1d9] transition" nextClassName="rounded-md bg-[var(--color-orange-light)] text-black px-[30px] py-4 cursor-pointer hover:bg-[#e9e1d9] transition" previousLinkClassName="w-full h-full text-center" nextLinkClassName="w-full h-full text-center" disabledClassName="opacity-0 pointer-events-none" previousLabel={"←"} nextLabel={"Next"} breakLabel={"..."} breakClassName="text-gray-500 px-2" />
        </div>
      )}
    </section>
  );
}
