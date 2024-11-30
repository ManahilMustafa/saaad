import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';
import Scroll from './components/scrollup/Scroll';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';




const App =() => {
  return (
    <>
    <Header />

    <main className='main'>
    <Home />
    <About />
    <Skills />
    <Services />
    <Work />
    <Review />
    <Contact />
    </main>
    <Footer />
    <Scroll />
    </>
  )
}

export default App
