import React from 'react'

const Product = ({item}) => {
    console.log(item)
  return (
    <div>
        
            name:{item.name} <br/>

            price:{item.price} <br />

            stock:{item.inStock ? 'OUI':'NON'} 
            <br />
            <br />
    </div>

  )
}

export default Product