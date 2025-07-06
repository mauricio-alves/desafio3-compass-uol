import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { Product } from "@/interfaces/Product";

type FilterType = "default" | "discount" | "isNew" | "priceLow" | "priceHigh";

export function useProducts(categoryId?: string, filter?: FilterType) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      
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
