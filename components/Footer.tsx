import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <span className="text-xl font-bold tracking-tight text-white block mb-2">
              NEXUS <span className="text-slate-400 font-light">PARTNER OS</span>
            </span>
            <p className="text-slate-600 text-sm">
              &copy; 2024 Nexus Fintech Ltd. All rights reserved. <br/>
              Empowering Wealth with Intelligence.
            </p>
          </div>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">联系我们要</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;