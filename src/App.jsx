import React from 'react'
import Stagiaire from './components/Stagiaire'
import { Voiture } from './components/Voiture'
import Compteur from './components/Compteur'

const App = () => {
  return (
    <div>
      <Voiture Couleur="rouge" Marque="tesla" Model="X"/>
      <Compteur/>
    </div>
  )
}

export default App