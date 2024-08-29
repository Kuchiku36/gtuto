import React, { useState } from 'react'
import Literature from './Literature';

const initBooks = [
    { id: 1, title: '1984', author: 'George Orwell', pages: 328 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
  ];

const IndexLiterature = () => {
    const [literature, setLiterature] = useState(initBooks)
  return (
    <div>
        IndexLiterature
        {literature.map(item=> <Literature key={item.id} item={item}  />)}
    </div>
  )
}

export default IndexLiterature