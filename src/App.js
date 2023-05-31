import React from 'react';
import Nav from './components/01-Nav/Nav.jsx'
import Introduction from './components/02-Introduction/Introduction.jsx'
import Skills from './components/03-Skills/Skills.jsx'
import Experience from "./components/04-Experience/Experience.jsx"
import Strength from './components/04-Experience/Strength.jsx'
import FadeBackground from "./components/05-Workplaces/FadeBackground.jsx";
import Workplaces from './components/05-Workplaces/Workplaces.jsx'
import Studies from './components/06-Studies/Studies.jsx'
import Hobbies from './components/06-Studies/Hobbies.jsx'
import Contact from './components/07-Conract/Contact.jsx'
import Footer from './components/08-Footer/Footer.jsx'
import "swiper/swiper.min.css";
import './App.css';



function App() {
  return (
      <div className="App">
        <Nav />
       <section className="container">
          <Introduction />
          <Skills />
          <Experience />
          <Strength />
          <FadeBackground />
          <Workplaces />
          <Studies />
          <Hobbies />
          <Contact />
        </section>
          <Footer />
      </div>
  );
}

export default App;
