import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onRequestDemo: () => void;
  onExploreProducts: () => void;
}

export default function FinalCTA({ onRequestDemo, onExploreProducts }: FinalCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#06b6d415_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transform Your Institution Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight text-balance">
          Ready to Transform Academic Operations With AI?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          See how EDUMATRIX AI can help your institution automate examinations, personalize student preparation, and simplify campus operations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onExploreProducts}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}
