import { LazyMotion, domAnimation } from 'framer-motion';

import { ThemeProvider } from './lib/theme';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer/Footer';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-slate-900">
          <Navbar />
          <main
            id="main-content"
            tabIndex={-1}
            className="outline-none"
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;