import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCounter from './components/CharacterCounter'
import ProductQuantity from './components/ProductQuantity'
import ColorPicker from './components/ColorPicker'
import UserProfileCard from './components/UserProfileCard';
import FeedbackCollector from './components/FeedbackCollector';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <CharacterCounter/>
       <hr/>
      <ProductQuantity/>
      <hr/>
      <ColorPicker/>
      <hr/>
      <UserProfileCard/>
      <hr/>
      <FeedbackCollector/>
      </body>
    </> 
  )
}

export default App
