import { ThemeProvider } from './lib/theme';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Navbar } from './components/layout/Navbar';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/layout/Footer/Footer';


function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;