import React from 'react';
import { Target, ShieldCheck, BrainCircuit } from 'lucide-react';

const Agents: React.FC = () => {
  const agents = [
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "增长猎手",
      subtitle: "The Hunter",
      desc: "利用高维知识图谱进行预测性获客。全网扫描高净值人群数字足迹，比客户更早发现资产配置需求，实现精准 Alpha 流量捕获。",
      color: "from-cyan-500/20 to-blue-500/5",
      border: "hover:border-cyan-500/50"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: "风控卫士",
      subtitle: "The Guardian",
      desc: "7x24小时全球舆情监控系统。针对投资组合进行实时压力测试，毫秒级生成危机应对策略，确保资产穿越周期的绝对安全。",
      color: "from-emerald-500/20 to-teal-500/5",
      border: "hover:border-emerald-500/50"
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
      title: "投研专家",
      subtitle: "The Expert",
      desc: "基于 RAG 技术的深度推理引擎。整合宏观经济数据与非结构化研报，像首席经济学家一样回答复杂的信托架构与税务筹划问题。",
      color: "from-purple-500/20 to-pink-500/5",
      border: "hover:border-purple-500/50"
    }
  ];

  return (
    <section id="agents" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agentic Workforce <br />
            <span className="text-slate-500 text-2xl font-light">您的数字员工团队</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-2xl transition-all duration-500 group border border-white/5 relative overflow-hidden ${agent.border}`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  {agent.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 flex items-end">
                  {agent.title}
                  <span className="text-xs font-medium text-slate-500 ml-3 mb-1 uppercase tracking-wider">{agent.subtitle}</span>
                </h3>
                
                <p className="text-slate-400 leading-relaxed mt-4 group-hover:text-slate-300 transition-colors">
                  {agent.desc}
                </p>

                <div className="mt-8 flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors cursor-pointer">
                  查看能力边界 <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;