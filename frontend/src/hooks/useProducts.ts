import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { Product } from "@/interfaces/Product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch {
        setError("Erro ao carregar categorias");
      }
    }

    fetchProducts();
  }, []);

  return { products, error };
}
