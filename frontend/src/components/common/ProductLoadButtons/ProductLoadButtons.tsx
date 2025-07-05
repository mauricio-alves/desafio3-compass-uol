import { ProductLoadButtonsProps } from "@/interfaces/ProductLoadButtonsProps";

export function ProductLoadButtons({ visibleCount, total, initialCount, onShowMore, onShowLess }: ProductLoadButtonsProps) {
  return (
    <div className="flex justify-center mt-8 gap-6">
      {visibleCount > initialCount && (
        <button onClick={onShowLess} className="border border-[var(--color-yellow)] text-[var(--color-yellow)] py-3 px-20 rounded hover:bg-[var(--color-yellow)] hover:text-white transition cursor-pointer font-poppins">
          Show Less
        </button>
      )}
      {visibleCount < total && (
        <button onClick={onShowMore} className="border border-[var(--color-yellow)] text-[var(--color-yellow)] py-3 px-20 rounded hover:bg-[var(--color-yellow)] hover:text-white transition cursor-pointer font-poppins">
          Show More
        </button>
      )}
    </div>
  );
}
