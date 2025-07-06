import arrow from "@/assets/icons/arrow-right.svg";

export function Breadcrumb({ productName }: { productName: string }) {
  return (
    <div className="bg-[var(--color-orange-light)] px-24 py-8 flex items-center font-poppins gap-2">
      <span className="text-gray-300">Home</span>
      <img src={arrow} alt="Arrow" className="mx-2 inline w-5 h-5" />
      <span className="text-gray-300">Shop</span>
      <img src={arrow} alt="Arrow" className="mx-2 inline w-5 h-5" />
      <div className="h-10 w-px bg-black mx-3" />
      <span className="ml-4">{productName}</span>
    </div>
  );
}
