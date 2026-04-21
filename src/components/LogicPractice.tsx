import React, { useEffect, useMemo, useState } from "react";

type LogicPracticeProp = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image?: string;
  rating: {
    rate: number;
    count: number;
  };
};

function LogicPractice() {
  const [products, setProducts] = useState<LogicPracticeProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/products`,
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filterAndSortProduct = useMemo(() => {
    return products
      .filter((product) => product.rating?.count > 100)
      .sort((a, b) => a.price - b.price);
  }, [products]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {filterAndSortProduct.length === 0 ? (
        <p>No products found</p>
      ) : (
        filterAndSortProduct.map((p) => (
          <div key={p.id}>
            <p>{p.title}</p>
            <p>{p.price}</p>
            <p>{p.rating.count}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default LogicPractice;
