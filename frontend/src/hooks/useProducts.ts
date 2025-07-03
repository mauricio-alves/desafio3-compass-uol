import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { ProductProps } from "@/interfaces/ProductProps";

export function useProducts() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch {
        setError("Erro ao carregar categorias");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
