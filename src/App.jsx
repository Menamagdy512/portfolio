import React from 'react'
import Headers from './components/Headers/Headers';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import Exprience from './components/exprience/Exprience';
import Achive from './components/achive/Achive';
import Myskills from './components/my skills/Myskills'
import Contactme from './components/Contactme/contactme';
import Footer from './components/Footer/Footer';
import "./app.css"



export default function App() {
  return (
    <div className='containar'>
      <Headers />
      <Hero />
      <Cards />
      <About/>
      <Exprience/>
      <Achive />
      <Myskills/>
      <Contactme/>
      <Footer/>
    </div>
  )
}
