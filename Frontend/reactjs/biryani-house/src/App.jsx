import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Special from './components/Special'
import AboutUs from './components/AboutUs'
import CustomerReviews from './components/CustomerReiviews'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Menu' element={<Menu/>}></Route>
        <Route path='/Special' element={<Special/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/CustomerReviews' element={<CustomerReviews/>}></Route>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
