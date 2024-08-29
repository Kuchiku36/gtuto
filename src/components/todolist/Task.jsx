import React from 'react'

const Task = ({item,callBackSupprimer,callBackRealiser}) => {
    console.log(item.task)
  return (
    <div>
        
        {item.task}
        <button onClick={()=>callBackSupprimer(item.id)} >supprimer</button>
        <button onClick={()=>callBackRealiser(item.id)}>réalisé</button>
        
        {
          item.state?'realiser':'en cours'
        }
    </div>
  )
}

export default Task