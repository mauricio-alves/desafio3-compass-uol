import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { CategoryProps } from "@/interfaces/CategoryProps";

export function useCategories() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await api.get("/categories");
        setCategories(res.data);
      } catch {
        setError("Erro ao carregar categorias");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
