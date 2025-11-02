import React from 'react';
import { DarkModeProvider } from './hooks/useDarkMode';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-primary-dark dark:text-primary-light transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
