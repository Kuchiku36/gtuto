import { useState } from "react"
import React  from 'react'

const Form = ({callBackAddTask}) => {
  const [text, setText] = useState('');
  const handleChange = (event) => { console.log(event.target.value);
    setText(event.target.value)
    
  }
  
  return (
    <div>
      
        Form
        <input type="text" value={text} onChange={(e)=>handleChange(e)} />
        <button onClick={()=>{callBackAddTask(text);setText('')}}> ajouter</button>
    </div>
  )
}

export default Form