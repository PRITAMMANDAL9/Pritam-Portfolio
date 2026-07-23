import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  
     <>
    <Navbar />

    <Hero />

    <About />

    <Skills />

    <Projects />

    <Contact />

    <Footer/>

    </>
  );
}

export default App;