
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
