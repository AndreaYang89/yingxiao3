import React from 'react';
import { ArrowRight, Layers, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">Nexus Partner AI OS v2.0 Live</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Nexus: 后资产时代的 <br />
            <span className="text-gradient">AI 操作系统</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            当顶级机构资产遇上 AI 智能体员工。
            <br className="hidden md:block" />
            专为 EAM 与家族办公室打造，重构财富管理价值链。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative px-8 py-4 bg-white text-nexus-dark font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                预约演示 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center">
              <Layers className="mr-2 w-4 h-4 text-purple-400" />
              查看架构
              <ChevronRight className="ml-1 w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Stats / Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10">
            <div>
              <div className="text-3xl font-bold text-white mb-1">$50B+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">穿透资产规模</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">合作家族办公室</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">ms级</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">风控响应速度</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Tier-1</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">全球顶级对冲</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;