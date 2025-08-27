import React from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero data={portfolioData} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Education education={portfolioData.education} />
      <Contact email={portfolioData.email} socials={portfolioData.socials} />
      <Footer />
    </div>
  );
}

export default App;