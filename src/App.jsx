import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experince from './components/experince/Experince'
import Portfolio from './components/portfolio/Portfolio'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
   <>
       <Header/>
       <Nav/>
       <About/>
       <Experince/>
       <Portfolio/>
       <Education/>
       <Contact/>
       <Footer/>
   </>
  )
}

export default App