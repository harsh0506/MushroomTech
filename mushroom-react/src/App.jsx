import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import Footer from './Footer'
import Team from './Team'
import Testimonials from './Testimonials'
import Mushrooms from './Mushrooms'
import InfoMushroom from './InfoMushroom'
import ExploreMushroom from './ExploreMushroom'
import FormComp from './FormComp'
import ContactForm from './ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Mushrooms/>
      <InfoMushroom />
      <FormComp />
      <Team/>
      <Testimonials />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
