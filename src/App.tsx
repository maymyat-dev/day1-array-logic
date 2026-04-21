import React from 'react'
import LogicPractice from './components/LogicPractice'
const Products = [
  { id: 1, name: "Keyboard", price: 45, stock: 10 },
  { id: 2, name: "Monitor", price: 200, stock: 0 },
  { id: 3, name: "Mouse", price: 25, stock: 15 },
  { id: 4, name: "Headphones", price: 100, stock: 5 }
];
function App() {
  return (
      <div>
          <LogicPractice products={Products} />
    </div>
  )
}

export default App