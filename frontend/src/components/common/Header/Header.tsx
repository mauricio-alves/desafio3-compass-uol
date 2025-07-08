import UserIcon from "@/assets/icons/user.svg";
import SearchIcon from "@/assets/icons/search.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import CartIcon from "@/assets/icons/cart.svg";
import { Link } from "react-router-dom";

const icons = [
  { src: UserIcon, alt: "User", href: "/login" },
  { src: SearchIcon, alt: "Search", href: "/search" },
  { src: HeartIcon, alt: "Wishlist", href: "/wishlist" },
  { src: CartIcon, alt: "Cart", href: "/cart" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/category/all" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
        <nav className="flex gap-18 text-black text-normal font-poppins ml-26">
          {links.map(({ label, href }) => (
            <Link key={label} to={href} className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-12 items-center mr-6">
          {icons.map(({ src, alt, href }) => (
            <Link key={alt} to={href}>
              <img src={src} alt={alt} className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-110" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
