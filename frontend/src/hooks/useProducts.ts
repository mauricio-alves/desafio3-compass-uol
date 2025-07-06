import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { Product } from "@/interfaces/Product";

export function useProducts(categoryId?: string, filter?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const baseUrl = "/products";
        const params: string[] = [];

        if (categoryId) {
          params.push(`categoryId=${categoryId}`);
        }

        const filterMap: Record<string, string> = {
          discount: "discount=true",
          isNew: "isNew=true",
          priceLow: "orderBy=price&order=asc",
          priceHigh: "orderBy=price&order=desc",
        };

        if (filter && filter !== "default" && filterMap[filter]) {
          params.push(filterMap[filter]);
        }

        const queryString = params.length > 0 ? `?${params.join("&")}` : "";
        const endpoint = `${baseUrl}${queryString}`;

        const res = await api.get(endpoint);
        setProducts(res.data);
      } catch {
        setError("Erro ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [categoryId, filter]);

  return { products, loading, error };
}
