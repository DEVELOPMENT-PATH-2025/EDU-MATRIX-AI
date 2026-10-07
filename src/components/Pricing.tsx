import React from 'react';
import { Check, Sparkles, Building2 } from 'lucide-react';

interface PricingProps {
  onRequestDemo: () => void;
}

export default function Pricing({ onRequestDemo }: PricingProps) {
  const plans = [
    {
      name: 'STARTER PLAN',
      suitable: 'Single Department / Small School',
      price: '₹49,999',
      period: '/ year',
      popular: false,
      features: [
        'Q-Genius Assessment Engine',
        'AI Question Paper Generation',
        'Syllabus Mapping',
        'OCR Blueprint Support',
        'Basic Academic Workflow',
        'Email Support',
      ],
      cta: 'Get Custom Quote',
    },
    {
      name: 'PRO PLAN',
      suitable: 'Engineering / Degree Colleges',
      price: '₹99,999',
      period: '/ year',
      popular: true,
      features: [
        'Everything in Starter Plan',
        'Advanced Q-Genius Capabilities',
        'Faculty Timer & Campus Utility',
        'Automated Faculty Notifications',
        'Biometric Attendance Timestamping',
        'HOD Alerts & Approvals',
        'Priority Technical Support',
      ],
      cta: 'Request Demo',
    },
    {
      name: 'ENTERPRISE PLAN',
      suitable: 'Full Campus / University',
      price: '₹1,99,999',
      period: '/ year',
      popular: false,
      features: [
        'Complete EDUMATRIX AI Suite',
        'Q-Genius + Exam Architect AI',
        'Faculty Timer & Campus Utility',
        'Custom Institutional Integration',
        'Dedicated Cloud Deployment',
        'Priority 24/7 Support',
        'Custom Workflow Development',
      ],
      cta: 'Get Custom Quote',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>Institutional Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Simple, Transparent Institutional Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Start with one department and scale EDUMATRIX AI across your entire institution.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl bg-slate-950 border p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20 lg:-translate-y-2'
                  : 'border-slate-800 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider block mb-1">
                    {plan.name}
                  </span>
                  <p className="text-xs text-slate-400 font-medium">{plan.suitable}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">{plan.period}</span>
                </div>

                <div className="pt-4 border-t border-slate-900 space-y-3">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onRequestDemo}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25 hover:scale-[1.02]'
                      : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Deployment Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Need a customized deployment?{' '}
            <button
              onClick={onRequestDemo}
              className="text-cyan-400 font-semibold hover:underline focus:outline-none"
            >
              Talk to our institutional solutions team →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
