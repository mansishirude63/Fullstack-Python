import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDos from './components/ToDos'
import Recipes from './components/Recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDos/>
      <br/>
      <hr/>
      <br/>
      <Recipes/>
    </>
  )
}

export default App
