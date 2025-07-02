import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Category } from "@/interfaces/Category";

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await api.get("/categories");
        setCategories(res.data);
        console.log("Categorias carregadas:", res.data);
      } catch {
        setError("Erro ao carregar categorias");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold text-center mb-10">Browse The Range</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="w-[280px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={category.image || "/images/default.jpg"} alt={category.name} className="w-full h-[300px] object-cover" />
            </div>
            <div className="text-center py-4">
              <p className="text-lg font-medium">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
