import UserIcon from "@/assets/icons/user.svg";
import SearchIcon from "@/assets/icons/search.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import CartIcon from "@/assets/icons/cart.svg";
import { Link } from "react-router-dom";

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
          <a href="#" className="hover:text-gray-600 transition">Home</a>
          <a href="#" className="hover:text-gray-600 transition">Shop</a>
          <a href="#" className="hover:text-gray-600 transition">About</a>
          <a href="#" className="hover:text-gray-600 transition">Contact</a>
        </nav>

        <div className="flex gap-12 items-center mr-6">
          <img src={UserIcon} alt="User" className="w-6 h-6 cursor-pointer" />
          <img src={SearchIcon} alt="Search" className="w-6 h-6 cursor-pointer" />
          <img src={HeartIcon} alt="Wishlist" className="w-6 h-6 cursor-pointer" />
          <img src={CartIcon} alt="Cart" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
