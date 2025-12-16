import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nexus-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            <Zap className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            NEXUS <span className="text-slate-400 font-light">OS</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#agents" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">AI 数字员工</a>
          <a href="#shelf" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">全球资产</a>
          <a href="#demo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">交互演示</a>
          <button className="px-5 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
            登录系统
          </button>
          <button className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white shadow-lg shadow-purple-900/50 hover:shadow-cyan-900/50 hover:scale-105 transition-all duration-300">
            预约演示
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-nexus-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
          <a href="#agents" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>AI 数字员工</a>
          <a href="#shelf" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>全球资产</a>
          <a href="#demo" className="text-slate-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>交互演示</a>
          <hr className="border-white/10" />
          <button className="w-full py-3 text-center text-slate-300 bg-white/5 rounded-lg">登录系统</button>
          <button className="w-full py-3 text-center text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg">预约演示</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;