import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { Product } from "@/interfaces/Product";

export function useProducts(categoryId?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const endpoint = categoryId ? `/products/category/${categoryId}` : "/products";
        const res = await api.get(endpoint);
        setProducts(res.data);
      } catch {
        setError("Erro ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [categoryId]);

  return { products, loading, error };
}
