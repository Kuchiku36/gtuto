import React, { useState } from 'react'
import Evenement from './Evenement';

const InitEvents = [
    { id: 1, name: 'Concert de Rock', date: '2024-09-15', location: 'Paris' },
    { id: 2, name: 'Conférence Tech', date: '2024-10-20', location: 'Londres' },
    { id: 3, name: 'Festival du Film', date: '2024-11-05', location: 'Cannes' },
  ];

const IndexEvenmentiel = () => {
    const [evenement, setEvenement] = useState(InitEvents)
  return (

    <div>
        IndexEvenmentiel
        {evenement.map(item=> <Evenement key={item.id} item={item}/>)}
    </div>
  )
}

export default IndexEvenmentiel