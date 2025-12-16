import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, User, Bot } from 'lucide-react';

const AiDemo: React.FC = () => {
  const fullResponse = `正在分析持仓...
> 检测到客户 "Tech_Growth_Portfolio" 持有 40% 纳斯达克科技股。
> 检索历史波动率：过去 5 次加息周期中，科技股平均回撤 12.5% 后反弹。
> 建议策略：建议利用 AI 结构化票据（FCN）置换现券，增加 20% 下跌保护。
> 已生成客户安抚信：[点击预览]...`;

  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    if (hasStarted) {
      const typeChar = () => {
        if (index < fullResponse.length) {
          setDisplayedText(fullResponse.slice(0, index + 1));
          index++;
          // Varied typing speed for realism
          const delay = Math.random() * 30 + 30; 
          timeoutId = setTimeout(typeChar, delay);
        }
      };
      typeChar();
    }

    return () => clearTimeout(timeoutId);
  }, [hasStarted]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedText]);

  const handleStartDemo = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background glow behind the chat */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Side */}
        <div className="md:w-1/2">
          <div className="flex items-center space-x-2 text-cyan-400 mb-4">
            <Sparkles size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Nexus AI Copilot</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            像顶级理财师一样 <br />
            <span className="text-gradient">思考与行动</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Nexus AI 不仅仅是聊天机器人。它连接了实时行情、宏观数据库与您的 CRM 系统。
            <br /><br />
            无论是应对突发市场波动，还是生成复杂的资产配置建议书，Nexus 都能在几秒钟内完成，让您的服务效率提升 10 倍。
          </p>
          <button 
            onClick={handleStartDemo}
            className="hidden md:inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all"
          >
            {hasStarted ? '重新演示' : '运行交互演示'}
          </button>
        </div>

        {/* Chat Interface */}
        <div className="md:w-1/2 w-full">
          <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 flex flex-col h-[500px]">
            {/* Chat Header */}
            <div className="bg-white/5 p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-slate-500 font-mono">NEXUS_SECURE_CHANNEL_V4.2</div>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 p-6 space-y-6 overflow-y-auto font-sans">
              
              {/* User Message */}
              <div className="flex items-start justify-end">
                <div className="bg-purple-600/20 border border-purple-500/30 text-white px-5 py-3 rounded-2xl rounded-tr-none max-w-[85%]">
                  <div className="flex items-center gap-2 mb-1 text-xs text-purple-300 opacity-70">
                    <User size={12} />
                    <span>Investment Advisor</span>
                  </div>
                  <p>美联储刚加息 25bp，我的客户持有科技股，该怎么安抚？</p>
                </div>
              </div>

              {/* AI Response */}
              <div className={`flex items-start justify-start transition-opacity duration-500 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-cyan-900/20 border border-cyan-500/30 text-cyan-50 px-5 py-3 rounded-2xl rounded-tl-none max-w-[90%] w-full shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                   <div className="flex items-center gap-2 mb-2 text-xs text-cyan-300 opacity-70">
                    <Bot size={12} />
                    <span>Nexus AI Agent</span>
                  </div>
                  <div className="font-mono text-sm leading-relaxed whitespace-pre-line">
                    {displayedText}
                    <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle cursor-blink"></span>
                  </div>
                </div>
              </div>

              {!hasStarted && (
                <div className="text-center mt-20">
                  <button 
                    onClick={handleStartDemo}
                    className="px-6 py-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 rounded-full text-sm hover:bg-cyan-500/30 transition-all animate-pulse-slow"
                  >
                    点击运行模拟
                  </button>
                </div>
              )}
            </div>

            {/* Input Area (Mock) */}
            <div className="p-4 bg-white/5 border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  disabled
                  placeholder="Ask Nexus Copilot..." 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 pl-4 pr-12 text-sm text-slate-300 focus:outline-none cursor-not-allowed"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <Send size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiDemo;