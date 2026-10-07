import React, { useState } from 'react';
import { FileText, Brain, Clock, ChevronRight, Check, Sparkles } from 'lucide-react';

interface ProductSuiteProps {
  onRequestDemo: () => void;
}

export default function ProductSuite({ onRequestDemo }: ProductSuiteProps) {
  const [activeProduct, setActiveProduct] = useState<0 | 1 | 2>(0);

  const products = [
    {
      badge: 'Assessment & Paper Engine',
      title: 'Q-Genius',
      subtitle: 'AI-powered examination paper generation and academic assessment automation.',
      description:
        'Eliminate manual paper setting stress. Q-Genius uses advanced syllabus-aware AI models to generate high-quality, secure examination papers and blueprints in under 2 minutes.',
      features: [
        'Syllabus-mapped question paper generation in under 2 minutes',
        'OCR support for examination blueprints & handwritten notes',
        'Automatic syllabus/blueprint mapping',
        'Anti-leak examination templates & secure encryption',
        'Multi-role review workflow for HODs and Dean approval',
        'Comprehensive question bank management',
        'Academic quality control & difficulty balancing',
      ],
      icon: FileText,
      accent: 'from-cyan-500 to-blue-600',
    },
    {
      badge: 'Student Learning Proxy',
      title: 'Exam Architect AI',
      subtitle: 'Personalized AI-powered exam preparation designed around each student syllabus and weak areas.',
      description:
        'Empower every student with an intelligent learning companion that analyzes their academic progress, identifies weak topics, and generates customized revision notes and mock tests.',
      features: [
        'AI-driven personalized exam preparation & roadmaps',
        'Smart chapter-wise revision notes generator',
        'Dynamic test creation tailored to student ability',
        'Weak-area identification & targeted practice drills',
        'Syllabus-aware interactive learning modules',
        'Predicted-question practice based on previous papers',
        'Student performance analytics and readiness scores',
      ],
      icon: Brain,
      accent: 'from-blue-600 to-indigo-600',
    },
    {
      badge: 'Campus Operations',
      title: 'Faculty Timer & Campus Utility',
      subtitle: 'Automate everyday academic coordination, schedules, and faculty notifications.',
      description:
        'Streamline institutional administration with intelligent scheduling, automated lecture alerts, attendance timestamping, and seamless HOD communications.',
      features: [
        'Automated lecture alert scheduling & timetable sync',
        'Biometric & digital attendance timestamping',
        'Instant HOD notifications & faculty announcements',
        'Faculty substitution & workload balancing',
        'Academic activity reminders and calendar integration',
        'Campus utility automation for exam halls & labs',
      ],
      icon: Clock,
      accent: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section id="products" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unified Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            One AI Platform. Three Powerful Academic Products.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            EDUMATRIX AI brings examination automation, personalized student preparation, and campus utilities into one intelligent ecosystem.
          </p>
        </div>

        {/* Product Selection Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <button
                key={prod.title}
                onClick={() => setActiveProduct(idx as 0 | 1 | 2)}
                className={`px-6 py-4 rounded-2xl text-left transition-all duration-200 border flex items-center gap-4 ${
                  activeProduct === idx
                    ? 'bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/40 text-slate-400'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${prod.accent} shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {prod.badge}
                  </span>
                  <span className="text-lg font-bold text-white">{prod.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Card Detail */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                {products[activeProduct].badge}
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
                {products[activeProduct].title}
              </h3>
              <p className="text-lg text-cyan-200/90 font-medium">
                {products[activeProduct].subtitle}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {products[activeProduct].description}
              </p>

              {/* Feature List */}
              <div className="space-y-3 pt-2">
                {products[activeProduct].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onRequestDemo}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  Explore {products[activeProduct].title} →
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Interactive UI Simulation Card */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    {products[activeProduct].title} Module
                  </span>
                </div>
                <span className="text-xs text-cyan-400 font-mono">Status: Active</span>
              </div>

              {activeProduct === 0 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>BLUEPRINT_OCR.AI</span>
                      <span className="text-emerald-400">Success (100%)</span>
                    </div>
                    <div className="text-sm font-semibold text-white">B.Tech Engineering Mathematics IV</div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-[98%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Questions Generated: 45 / 45</span>
                      <span>Difficulty: Balanced</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="block text-[10px] text-slate-400 font-mono">GENERATION TIME</span>
                      <span className="text-lg font-bold text-white font-mono">1.28s</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="block text-[10px] text-slate-400 font-mono">QUALITY CHECK</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">Passed (0 Errors)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeProduct === 1 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>STUDENT_ANALYTICS_PROXY</span>
                      <span className="text-cyan-400">Live Feedback</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Weak Area: Dynamic Programming</div>
                    <p className="text-xs text-slate-300">AI generated 15 targeted practice questions and custom revision notes for the upcoming mid-term exams.</p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono">Revision Notes Ready</span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono">Mock Test #3 Active</span>
                    </div>
                  </div>
                </div>
              )}

              {activeProduct === 2 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>CAMPUS_UTILITY_SYNC</span>
                      <span className="text-emerald-400">Synced</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Lecture Alert: CS-402 (Lab Block B)</div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between p-2 rounded bg-slate-900">
                        <span>HOD Notification Sent</span>
                        <span className="text-emerald-400">Delivered</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-900">
                        <span>Attendance Timestamping</span>
                        <span className="text-cyan-400">Active (42 Present)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2 text-center">
                <span className="text-xs text-slate-400 font-mono">
                  Enterprise Grade Architecture • Scalable & Secure
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
