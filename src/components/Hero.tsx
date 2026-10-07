import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, CheckCircle2, FileText, BarChart3, Clock, Layers, Brain } from 'lucide-react';

interface HeroProps {
  onRequestDemo: () => void;
  onExploreProducts: () => void;
}

export default function Hero({ onRequestDemo, onExploreProducts }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'qgen' | 'architect' | 'utility'>('qgen');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background glow & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>AI-Powered Academic Operations & Assessment Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Next-Gen Academic Automation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Higher Education</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Automating Exam Generation, Student Preparation, and Campus Utilities for Modern Educational Institutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onExploreProducts}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore Products
            </button>
          </div>

          {/* Trust Line */}
          <p className="text-xs text-slate-400 font-mono tracking-wider pt-2">
            BUILT FOR MODERN SCHOOLS, COLLEGES & UNIVERSITIES IN BHOPAL & NATIONWIDE
          </p>
        </div>

        {/* Hero Dashboard Visualization */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-30 blur-lg" />
          
          <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">EDUMATRIX AI Cloud Console v3.4</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  System Operational
                </span>
              </div>
            </div>

            {/* Dashboard Interactive Tabs */}
            <div className="flex flex-wrap gap-3 py-6">
              <button
                onClick={() => setActiveTab('qgen')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'qgen'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                <FileText className="w-4 h-4" />
                Q-Genius Assessment Engine
              </button>
              <button
                onClick={() => setActiveTab('architect')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'architect'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                <Brain className="w-4 h-4" />
                Exam Architect AI
              </button>
              <button
                onClick={() => setActiveTab('utility')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'utility'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                <Clock className="w-4 h-4" />
                Campus Utility & Timers
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              <div className="lg:col-span-2 rounded-xl bg-slate-950/70 border border-slate-800 p-6 space-y-4">
                {activeTab === 'qgen' && (
                  <>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white">Active Examination Blueprint</h3>
                      <span className="text-xs text-cyan-400 font-mono">B.Tech CSE - Sem V</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Advanced Algorithms (CS-501)</span>
                        <span className="text-emerald-400 font-mono font-medium">98% Syllabus Mapped</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Compiler Design Blueprints</span>
                        <span className="text-cyan-400 font-mono font-medium">Generated in 1.4s</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Anti-Leak Security Check</span>
                        <span className="text-emerald-400 font-mono font-medium">Encrypted & Locked</span>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'architect' && (
                  <>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white">Student Readiness & Weak Areas</h3>
                      <span className="text-xs text-cyan-400 font-mono">Batch 2026</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Dynamic Revision Notes Created</span>
                        <span className="text-cyan-400 font-mono font-medium">1,420 Students</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Predicted Question Accuracy</span>
                        <span className="text-emerald-400 font-mono font-medium">91.5% Match Rate</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Personalized Practice Tests</span>
                        <span className="text-indigo-400 font-mono font-medium">Active</span>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'utility' && (
                  <>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white">Campus & Faculty Coordination</h3>
                      <span className="text-xs text-cyan-400 font-mono">Live Scheduler</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Automated Lecture Alerts</span>
                        <span className="text-emerald-400 font-mono font-medium">Synced (HOD Notified)</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Biometric Attendance Timestamping</span>
                        <span className="text-cyan-400 font-mono font-medium">Real-Time Feed</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="text-slate-300">Exam Hall Allocation AI</span>
                        <span className="text-indigo-400 font-mono font-medium">Optimized</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Side Metric Widgets */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-slate-400">Syllabus Coverage</span>
                    <span className="text-xl font-bold font-display text-white">98.4%</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm">
                    ✓
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-slate-400">Student Readiness</span>
                    <span className="text-xl font-bold font-display text-white">87.0%</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    ↑
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-slate-400">Generation Speed</span>
                    <span className="text-xl font-bold font-display text-white">&lt; 2 Mins</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">
                    ⚡
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Callouts */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Question Paper Generated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> AI Analysis Complete
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> OCR Blueprint Mapping Active
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
