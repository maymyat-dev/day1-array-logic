import { useEffect, useState } from 'react'

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string;
    rating: {
        rate: number;
        count: number;
    }
}

function LogicPractice() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)

                if (!response.ok) {
                    throw new Error('Network Error')
                }
                const data = await response.json();
                setProducts(data)
            } catch (err: unknown) {
                setError((err as Error).message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    },[])

    const filterAndSortProduct = products.filter((product)=>product.rating?.count > 200).sort((a,b)=> a.price - b.price)

    if (loading) {
        return <p>Loading</p>
    }
    if (error) {
        return <p>Error: {error}</p>
    }
  return (
      <div>
          {
              filterAndSortProduct.length === 0 ? (
                  <p>No product found</p>
              ) : (
                      filterAndSortProduct.map((product) => (
                          <div key={product.id} >
                              <p>{product.title}</p>
                          <p>{product.price}</p>
                          </div>
                      ))
              )
          }
    </div>
  )
}

export default LogicPractice