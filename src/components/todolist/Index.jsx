import React, { useState } from 'react'
import Form from './Form'
import Task from './Task'

const  initTasks = [
    {id:1, task:"faire", state:true, ref:"joas"},
    {id:2, task:"boire", state:true, ref:"joas"},
    {id:3, task:"manger",state:true, ref:"joas"},
    {id:4, task:"dormir",state:false, ref:"joas"},

]
const Index = () => {
// initialisation des taches
    const [tasks,setTask]=useState(initTasks)
    const addTask = (text) => { 
      const newTask={
        id:Date.now(),
        task:text,
        state:false,
      }
      setTask([...tasks,newTask])
      console.log(text,newTask);
     }
    const supprimer = (id) => { const newTasks=tasks.filter(item=>item.id!=id)
      setTask(newTasks)}

    const realiser = (id) =>{

       const newTasks= tasks.map(item=>{

      if(item.id==id)
      {
        return {...item,state:!item.state}
      }
      else
      {
        return item;
      } 
    })
    setTask(newTasks)
      console.log(newTasks) 
  }
  return (
    <div>
        Index
      <Form callBackAddTask={addTask} />
      {tasks.map (item => <Task 
                  key={item.id} 
                  item={item} 
                  callBackSupprimer={supprimer}
                  callBackRealiser={realiser}
                  />
      )}
    </div>
  )
}

export default Index