import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-dark-300 selection:bg-accent/30 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
