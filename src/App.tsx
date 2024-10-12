import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Mohamed Abdulaziz Eisa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;