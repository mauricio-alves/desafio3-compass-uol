import { useCategories } from "@/hooks/useCategories";
import { Link } from "react-router-dom";

export function Categories() {
  const { categories, loading, error } = useCategories();

  return loading ? (
    <p className="text-center text-gray-500">Carregando...</p>
  ) : error ? (
    <p className="text-center text-red-500">{error}</p>
  ) : (
    <section className="py-12">
      <h2 className="text-heading-3 font-bold font-poppins text-center py-14 mb-8 -ml-13">Browse The Range</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((category) => (
          <div key={category.id}>
            <Link to={`/category/${category.id}`} className="block w-[380px] h-[480px] rounded-lg overflow-hidden shadow-md transition-transform duration-300 cursor-pointer hover:scale-[1.05]">
              <img src={category.image || "/images/default.jpg"} alt={category.name} className="w-full h-full object-cover" />
            </Link>
            <Link to={`/category/${category.id}`} className="block text-center mt-4 py-4">
              <span className="relative inline-block text-2xl font-poppins after:content-[''] after:block after:h-[2px] after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">{category.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
