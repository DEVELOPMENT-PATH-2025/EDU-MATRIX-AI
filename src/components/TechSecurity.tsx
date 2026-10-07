import React from 'react';
import { ShieldCheck, Lock, Key, Server, FileLock2, Database, Zap } from 'lucide-react';

export default function TechSecurity() {
  const securityFeatures = [
    {
      title: 'Secure Architecture',
      description: 'Built on robust enterprise microservices with multi-tier isolation and zero-trust perimeter defense.',
      icon: ShieldCheck,
    },
    {
      title: 'Encrypted Institutional Data',
      description: 'All examination papers, student records, and institutional data are encrypted at rest and in transit.',
      icon: Lock,
    },
    {
      title: 'Role-Based Access Control',
      description: 'Granular permissions for Deans, HODs, faculty members, and examination coordinators.',
      icon: Key,
    },
    {
      title: 'Controlled Workflows',
      description: 'Multi-stage approval gates ensure academic integrity before any question paper is cleared.',
      icon: FileLock2,
    },
    {
      title: 'API Security & Auditing',
      description: 'Comprehensive audit logging for all academic queries, administrative actions, and data access.',
      icon: Server,
    },
    {
      title: 'Scalable Infrastructure',
      description: 'High-availability cloud backend designed to handle peak examination loads effortlessly.',
      icon: Database,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Security</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Enterprise-Ready. Privacy-First.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            EDUMATRIX AI ensures institutional data remains secure, compliant, and strictly confidential.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.title}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 space-y-4 hover:border-cyan-500/40 transition-colors shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">{sec.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{sec.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
