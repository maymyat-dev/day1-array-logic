type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
}
interface LogicPracticeProps {
    products: Product[]
}

function LogicPractice({ products }: LogicPracticeProps) {
    
    const filterAndSortProducts = products.filter((product)=>product.stock > 0).sort((a,b)=> a.price - b.price)
  return (
      <div>
          {
              filterAndSortProducts.map((product) => (
                  <p key={product.id}>{product.name}</p>
              ))
          }
    </div>
  )
}

export default LogicPractice