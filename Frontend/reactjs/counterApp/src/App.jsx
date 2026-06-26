import { useState } from 'react'
import Counter from './components/Counter'
import Greetings from './components/Greetings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter/> 
     <Greetings/>  
    </>
  )
}

export default App
