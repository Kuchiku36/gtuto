import React,{useState} from 'react'
import Increment from './increment'
import Decrement from './Decrement'
import Reset from './Reset'



const Compteur = () => {
const [nombre, setNombre] = useState(0)
    //incrémentation 
    const increment = () => { 
        console.log("increment") 
        setNombre(nombre+1)
    }
    //je décremente
    const decrement = () => { 
        console.log("decrement")
        setNombre(nombre-1)
     }
     //reset
     const reset = () => { 
        console.log("reset")
        setNombre(0)
      }

  return (
    <div>
        Compteur  nombre:{nombre}

    <Increment callBackIncrement={increment}/>

    <Decrement callBackDecrement={decrement}/>
    
    <Reset callBackReset={reset}/>
    </div>
  )
}

export default Compteur