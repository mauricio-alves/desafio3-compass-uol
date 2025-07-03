import UserIcon from "@/assets/icons/user.svg";
import SearchIcon from "@/assets/icons/search.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import CartIcon from "@/assets/icons/cart.svg";
import { Link } from "react-router-dom";

const icons = [
  { src: UserIcon, alt: "User" },
  { src: SearchIcon, alt: "Search" },
  { src: HeartIcon, alt: "Wishlist" },
  { src: CartIcon, alt: "Cart" },
];

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto py-6 flex items-center justify-between">
        <div>
          <Link to="/" className="flex items-center gap-2 -ml-7">
            <img src="/furniro.svg" alt="Furniro Logo" className="h-8 w-auto" />
            <span className="text-heading-2 font-bold text-black font-montserrat">Furniro</span>
          </Link>
        </div>
        <nav className="flex gap-19 text-black text-normal font-poppins ml-26">
          {["Home", "Shop", "About", "Contact"].map((label) => (
            <a key={label} href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex gap-12 items-center mr-6">
          {icons.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-110" />
          ))}
        </div>
      </div>
    </header>
  );
}
