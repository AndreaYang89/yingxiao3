import React from 'react';
import { Globe, TrendingUp, Box } from 'lucide-react';

const GlobalShelf: React.FC = () => {
  return (
    <section id="shelf" className="py-24 bg-gradient-to-b from-nexus-dark to-slate-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Global Shelf <br />
            <span className="text-gradient">全球稀缺货架</span>
          </h2>
          <p className="text-slate-400">
            不仅是连接，更是严选。聚合全球 Institutional Grade (机构级) 资产，为家办提供穿透式配置能力。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl bg-[#0a0f1e] border border-white/10 hover:border-purple-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp size={120} />
            </div>
            <div className="p-8 relative z-10">
              <div className="text-purple-400 mb-4 font-mono text-xs uppercase tracking-widest border border-purple-500/30 inline-block px-2 py-1 rounded">Private Equity</div>
              <h3 className="text-2xl font-bold text-white mb-2">稀缺私募</h3>
              <p className="text-slate-400 text-sm mb-6">红杉 (Sequoia) / 黑石 (Blackstone) 旗舰基金份额直通。</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>S级项目跟投权</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>低费率结构设计</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>专属 LP 报告解读</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl bg-[#0a0f1e] border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={120} />
            </div>
            <div className="p-8 relative z-10">
              <div className="text-cyan-400 mb-4 font-mono text-xs uppercase tracking-widest border border-cyan-500/30 inline-block px-2 py-1 rounded">Hedge Funds</div>
              <h3 className="text-2xl font-bold text-white mb-2">顶级对冲</h3>
              <p className="text-slate-400 text-sm mb-6">千禧 (Millennium) / 桥水 (Bridgewater) 全球宏观策略。</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>美元/离岸人民币配置</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>中性策略稳健增值</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>机构白名单准入</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-2xl bg-[#0a0f1e] border border-white/10 hover:border-pink-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Box size={120} />
            </div>
            <div className="p-8 relative z-10">
              <div className="text-pink-400 mb-4 font-mono text-xs uppercase tracking-widest border border-pink-500/30 inline-block px-2 py-1 rounded">Structured Notes</div>
              <h3 className="text-2xl font-bold text-white mb-2">结构化票据</h3>
              <p className="text-slate-400 text-sm mb-6">AI 定制 FCN / Snowball，基于实时波动率定价。</p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>个性化挂钩标的</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>动态敲入敲出保护</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>高票息收益增强</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalShelf;