import { useState, useEffect } from "react";
import { api } from "@/services/api";
import { Product } from "@/interfaces/Product";
import { FilterType, SortType } from "@/types/productFilters";

export function useProducts(categoryId?: string, filter?: FilterType, sort?: SortType) {
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

        if (filter === "discount") {
          params.push("discount=true");
        } else if (filter === "isNew") {
          params.push("isNew=true");
        }

        if (sort === "priceLow") {
          params.push("orderBy=price");
          params.push("order=asc");
        } else if (sort === "priceHigh") {
          params.push("orderBy=price");
          params.push("order=desc");
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
  }, [categoryId, filter, sort]);

  return { products, loading, error };
}
