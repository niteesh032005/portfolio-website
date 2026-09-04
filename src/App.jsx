import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-text-main bg-background min-h-screen selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
