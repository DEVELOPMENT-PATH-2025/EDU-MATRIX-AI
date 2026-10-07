import React from 'react';
import { Clock, ShieldCheck, Cpu, CheckCircle2, Zap } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      number: '01',
      title: '80% Time Saved',
      description: 'Reduce examination paper generation and verification workflows from hours to minutes.',
      visualLabel: 'Hours → Minutes',
      icon: Clock,
      accent: 'text-cyan-400',
      bgGradient: 'from-cyan-500/10 to-blue-500/5',
    },
    {
      number: '02',
      title: '100% Syllabus Coverage',
      description: 'Automatic syllabus and blueprint mapping helps prevent out-of-syllabus questions and improves examination consistency.',
      visualLabel: 'Syllabus → Blueprint → Questions',
      icon: CheckCircle2,
      accent: 'text-emerald-400',
      bgGradient: 'from-emerald-500/10 to-teal-500/5',
    },
    {
      number: '03',
      title: 'Data Security & Privacy',
      description: 'Institutional academic data remains private, protected, and encrypted with enterprise-grade security practices.',
      visualLabel: 'Encrypted Cloud Architecture',
      icon: ShieldCheck,
      accent: 'text-indigo-400',
      bgGradient: 'from-indigo-500/10 to-purple-500/5',
    },
    {
      number: '04',
      title: 'AI-Powered Decision Support',
      description: 'Use academic data and AI insights to make faster, better-informed academic decisions across departments.',
      visualLabel: 'Data-Driven Insights',
      icon: Cpu,
      accent: 'text-blue-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/5',
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Institutional Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Transform Hours of Academic Work Into Intelligent Automation.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            EDUMATRIX AI helps institutions reduce repetitive work, improve academic accuracy, and create a more efficient examination ecosystem.
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.number}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 relative overflow-hidden group hover:border-slate-700 transition-all duration-300 shadow-xl"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${val.bgGradient} blur-2xl rounded-full pointer-events-none group-hover:scale-110 transition-transform`} />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-slate-400">{val.number}</span>
                  <div className={`w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center ${val.accent} shadow-inner`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {val.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {val.description}
                </p>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-mono text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {val.visualLabel}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
