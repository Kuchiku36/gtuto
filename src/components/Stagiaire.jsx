import React from 'react'
import Name from './Name'
import Prenom from './Prenom'
import Age from './Age'

const Stagiaire = () => {
  return (
    <div>
        Stagiaire
        <Name nom="Veronique"/>
        <Prenom prenom="Derick" />
        <Age age="95" />
    </div>
  )
}

export default Stagiaire