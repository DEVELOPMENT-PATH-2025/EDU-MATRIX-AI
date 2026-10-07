import React from 'react';
import { Check, Sparkles, Building2, Smartphone, Download, GraduationCap, Users } from 'lucide-react';

interface PricingProps {
  onRequestDemo: () => void;
}

export default function Pricing({ onRequestDemo }: PricingProps) {
  const plans = [
    {
      name: 'FREE TRIAL PLAN',
      suitable: 'Department Evaluation',
      price: '₹0',
      period: '/ 2 months free',
      popular: false,
      badge: 'Limited Models',
      features: [
        'Free for 2 Months Trial',
        'Limited AI Question Models',
        'Basic Q-Genius Faculty Access',
        'Sample Exam Architect Student View',
        'Standard Email Support',
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Q-GENIUS (FACULTY LICENSE)',
      suitable: 'For HODs, Faculty & Examination Dept',
      price: '₹34,999',
      period: '/ year',
      popular: false,
      badge: 'Faculty Assessment Engine',
      features: [
        'Dedicated Q-Genius Faculty Portal',
        'Syllabus-Mapped Question Paper Generation',
        'OCR Blueprint Support for Exam Papers',
        'Anti-Leak Examination Templates',
        'Question Bank & Quality Control',
        'Multi-Role Review Workflow',
      ],
      cta: 'Get Q-Genius Faculty',
    },
    {
      name: 'EXAM ARCHITECT AI (STUDENT LICENSE)',
      suitable: 'For Students & Academic Coaching',
      price: '₹19,999',
      period: '/ year',
      popular: false,
      badge: 'Student Learning Proxy',
      features: [
        'Dedicated Student Learning Portal',
        'Personalized Exam Preparation',
        'Smart Chapter-Wise Revision Notes',
        'Weak-Area Identification Drills',
        'Predicted-Question Practice Tests',
        'Student Readiness Analytics',
      ],
      cta: 'Get Exam Architect Student',
    },
    {
      name: 'PRO INSTITUTIONAL SUITE',
      suitable: 'Combined Faculty + Student Access',
      price: '₹99,999',
      period: '/ year',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Complete Q-Genius (Faculty)',
        'Complete Exam Architect (Students)',
        'Full AI Model Access',
        'Priority HOD Approvals & Alerts',
        'Priority Technical Support',
      ],
      cta: 'Request Demo',
    },
    {
      name: 'CAMPUS ENTERPRISE',
      suitable: 'Full Campus / University',
      price: '₹1,99,999',
      period: '/ year',
      popular: false,
      badge: 'Full Ecosystem',
      features: [
        'Complete EDUMATRIX AI Suite',
        'Unlimited Faculty & Student Seats',
        'Custom Cloud Integration',
        'Dedicated Account Manager',
        '24/7 Priority Support',
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
            <span>Institutional Investment & Licensing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Tailored Pricing for Faculty & Students
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Q-Genius is built for faculty examination workflows, while Exam Architect AI empowers student preparation. Choose standalone or campus-wide plans.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl bg-slate-950 border p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20 lg:-translate-y-2'
                  : 'border-slate-800 shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-900 text-cyan-400 border border-slate-700'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6 pt-2">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider block mb-1">
                    {plan.name}
                  </span>
                  <p className="text-xs text-slate-400 font-medium">{plan.suitable}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">{plan.period}</span>
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

        {/* Faculty Timer Google Play Store Callout */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Faculty Utility</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Faculty Timer & Campus Utility App
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Manage lecture schedules, attendance timestamping, and HOD alerts directly from your mobile device. Download the official companion app on the Google Play Store.
            </p>
          </div>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center gap-3 shrink-0 shadow-lg hover:border-cyan-500/50 transition-colors"
          >
            <Download className="w-5 h-5 text-cyan-400" />
            <div className="text-left">
              <span className="block text-[10px] uppercase font-mono text-slate-400">Get it on</span>
              <span className="text-sm font-semibold">Google Play Store</span>
            </div>
          </a>
        </div>

        {/* Custom Deployment Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Need a customized deployment or faculty/student trial?{' '}
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
