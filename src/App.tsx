import { About } from './components/About';
import { CV } from './components/CV';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Projects } from './components/Projects';
import { ParticlesBackground } from './components/ui/ParticlesBackground';
import { Experiences } from './components/Experiences';

function App() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <About />
      <CV />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
