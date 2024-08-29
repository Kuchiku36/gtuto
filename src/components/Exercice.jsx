import React, { useState } from 'react'
import Product from './Product';

const initProducts = [
    {id:1, name:'laptop', price:1200 , inStock:true},
    {id:2, name:'smartphone', price:800 , inStock:true},
    {id:3, name:'tablet', price:500 ,inStock:true},
];

const Exercice = () => {
    const [products, setProducts] = useState(initProducts)

  return (
    <div>Exercice
        
        {products.map (item=> <Product key={item.id} item={item} />)}
        

        

    </div>
  )
}

export default Exercice