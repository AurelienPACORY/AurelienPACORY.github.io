import { CV } from './components/CV';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Projects } from './components/Projects';
import { ParticlesBackground } from './components/ui/ParticlesBackground';
import { Experiences } from './components/Experiences';

function App() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <CV />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
