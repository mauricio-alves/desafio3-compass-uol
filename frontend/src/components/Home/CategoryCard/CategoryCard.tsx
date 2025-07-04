import { CategoryCardProps } from "@/interfaces/CategoryCardProps";
import { Link } from "react-router-dom";

export function CategoryCard({ id, name, image }: CategoryCardProps) {
  return (
    <div>
      <Link to={`/category/${id}`} className="block w-[380px] h-[480px] rounded-lg overflow-hidden shadow-md transition-transform duration-300 cursor-pointer hover:scale-[1.05]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </Link>
      <Link to={`/category/${id}`} className="block text-center mt-4 py-4">
        <span className="relative inline-block text-2xl font-poppins after:content-[''] after:block after:h-[2px] after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">{name}</span>
      </Link>
    </div>
  );
}
