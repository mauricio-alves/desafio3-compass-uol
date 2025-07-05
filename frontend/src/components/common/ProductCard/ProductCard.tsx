import { ProductCardProps } from "@/interfaces/ProductCardProps";
import { Link } from "react-router-dom";
import shareIcon from "@/assets/icons/share.svg";
import compareIcon from "@/assets/icons/compare.svg";
import heartIcon from "@/assets/icons/heart.svg";

export function ProductCard({ id, name, description, price, images, discount, discountPercent, isNew }: ProductCardProps) {
  const calculatedOldPrice = discount && discountPercent ? parseFloat((price / (1 - discountPercent / 100)).toFixed(2)) : null;
  const truncatedTitle = name.length > 16 ? name.slice(0, 16) + "..." : name;
  const truncatedDescription = description.length > 25 ? description.slice(0, 25) + "..." : description;

  const overlayActions = [
    { icon: shareIcon, label: "Share" },
    { icon: compareIcon, label: "Compare" },
    { icon: heartIcon, label: "Like", forceWhite: true },
  ];

  return (
    <div className="relative group transition-transform duration-300 hover:scale-[1.05] cursor-pointer">
      <div className="bg-white shadow-md overflow-hidden transition duration-300 group-hover:opacity-70">
        <div className="relative w-full h-76">
          <img src={images[0]} alt={name} className="w-full h-full object-cover" />
          {discount && discountPercent !== undefined && <span className="absolute top-6 right-6 bg-[var(--color-red)] text-white text-normal px-2 py-3 rounded-full z-10 font-poppins">-{discountPercent}%</span>}
          {isNew && !discount && <span className="absolute top-6 right-6 bg-[var(--color-green)] text-white text-normal px-2 py-3 rounded-full z-10 font-poppins">New</span>}
        </div>
        <div className="p-4 pt-3 bg-[var(--color-gray)] font-poppins">
          <h3 className="text-2xl font-semibold pb-2">{truncatedTitle}</h3>
          <p className="text-sm text-gray-500 pb-3">{truncatedDescription}</p>
          <div className="flex items-center gap-5 mb-4">
            <span className="text-lg font-bold text-gray-900">Rp {price.toLocaleString("id-ID")}</span>
            {calculatedOldPrice && <span className="text-sm line-through text-gray-400">Rp {calculatedOldPrice.toLocaleString("id-ID")}</span>}
          </div>
        </div>
      </div>
      <Link to={`/product/${id}`} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[var(--color-yellow)] font-semibold px-6 w-[200px] text-center py-3 font-poppins z-20 opacity-0 group-hover:opacity-100 transition-colors duration-300 hover:bg-[var(--color-yellow)] hover:text-white">
        See Details
      </Link>
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex justify-center items-center gap-6 pt-30">
        <div className="flex items-center gap-5 text-white text-base font-medium">
          {overlayActions.map(({ icon, label, forceWhite }) => (
            <button key={label} type="button" aria-label={label} className="flex items-center cursor-pointer gap-1 transition-transform duration-300 hover:scale-110">
              <img src={icon} alt={label} className={`w-5 h-5 ${forceWhite ? "invert" : ""}`} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
