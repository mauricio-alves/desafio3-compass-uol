import { useCategories } from "@/hooks/useCategories";
import { CategoryCard } from "../CategoryCard/CategoryCard";

export function Categories() {
  const { categories, loading, error } = useCategories();

  return loading ? (
    <p className="text-center text-gray-500">Carregando...</p>
  ) : error ? (
    <p className="text-center text-[var(--color-red)]">{error}</p>
  ) : (
    <section className="pt-12 pb-9">
      <h2 className="text-heading-3 font-bold font-poppins text-center py-14 mb-8">Browse The Range</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((category) => (
          <CategoryCard key={category.id} id={category.id} name={category.name} image={category.image} />
        ))}
      </div>
    </section>
  );
}
