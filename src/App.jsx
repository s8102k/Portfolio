import './App.css'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
