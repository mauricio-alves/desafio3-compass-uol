export function SizeSelector({ sizes, selectedSize, onSelect }: { sizes: string[]; selectedSize: string | null; onSelect: (size: string) => void }) {
  return (
    <div className="space-y-1 py-2">
      <p className="text-[#9F9F9F]">Size</p>
      <div className="flex gap-4">
        {sizes.map((size) => (
          <button key={size} className={`px-3 py-1 rounded cursor-pointer bg-[var(--color-orange-light)] hover:bg-[var(--color-yellow)] hover:text-white transition ${selectedSize === size ? "bg-[var(--color-yellow)] text-white" : ""}`} onClick={() => onSelect(size)}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
