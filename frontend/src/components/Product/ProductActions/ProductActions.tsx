import { ProductActionsProps } from "@/interfaces/ProductActionsProps";

export function ProductActions({ quantity, setQuantity }: ProductActionsProps) {
  return (
    <div className="flex items-center gap-4 mt-4 border-b pb-12 border-gray-300">
      <div className="flex items-center border rounded-xl border-[#9F9F9F]">
        <button className="px-4 py-1 cursor-pointer" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button className="px-4 py-4 cursor-pointer" onClick={() => setQuantity((q) => q + 1)}>
          +
        </button>
      </div>
      <button className="px-14 py-4 border rounded-2xl cursor-pointer hover:bg-black hover:text-white">Add To Cart</button>
      <button className="px-14 py-4 border rounded-2xl cursor-pointer hover:bg-black hover:text-white">+ Compare</button>
    </div>
  );
}
