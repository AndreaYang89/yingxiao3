import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agents from './components/Agents';
import GlobalShelf from './components/GlobalShelf';
import AiDemo from './components/AiDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nexus-dark text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Agents />
          <GlobalShelf />
          <AiDemo />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;