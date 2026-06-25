import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDos from './components/ToDos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDos/>
    </>
  )
}

export default App
