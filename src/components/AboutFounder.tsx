import React from 'react';
import { Linkedin, Github, Cpu, Shield, Sparkles, Building2, Code2 } from 'lucide-react';

export default function AboutFounder() {
  const techStack = [
    'TypeScript',
    'React',
    'Angular',
    'Java 21',
    'Spring Boot',
    'Spring AI',
    'Microservices',
    'REST APIs',
    'MySQL',
    'Cloud Infrastructure',
    'AI / LLM Integration',
    'Secure APIs',
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* About EDUMATRIX AI Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>About EDUMATRIX AI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Building the Future of AI-Powered Education
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            EDUMATRIX AI is building intelligent technology solutions for modern educational institutions from Bhopal, Madhya Pradesh. Our vision is to simplify academic operations, improve examination quality, personalize student preparation, and help institutions adopt practical Artificial Intelligence across their academic workflows.
          </p>
        </div>

        {/* Founder & CTO Profile Card */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Photo & Visual Card (Desktop: 5 cols, Mobile: full) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 opacity-30 blur-lg" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[3/4] shadow-2xl">
                {/* Use the generated image or professional fallback */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                  alt="Founder & CTO"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs border border-cyan-500/30">
                    Founder & CTO
                  </span>
                  <h4 className="text-xl font-display font-bold text-white">Amritanshu Tiwari</h4>
                  <p className="text-xs text-slate-300 font-mono">EDUMATRIX AI • Bhopal, India</p>
                </div>
              </div>
            </div>

            {/* Founder Info & Technical Capabilities (Desktop: 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                Founder & CTO Profile
              </div>
              <h3 className="text-3xl font-display font-bold text-white">
                Amritanshu Tiwari
              </h3>
              <p className="text-cyan-400 font-mono text-sm">
                Founder & CTO — EDUMATRIX AI
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Engineering EDUMATRIX AI with scalable backend architecture, AI integration, and enterprise-grade software engineering principles. Dedicated to transforming higher education systems across India through robust, secure, and lightning-fast digital infrastructure.
              </p>

              <div className="space-y-3 pt-2">
                <span className="block text-xs font-mono font-semibold text-slate-400 uppercase">
                  Technical Expertise & Architecture
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Java 21',
                    'Spring Boot',
                    'Spring AI',
                    'Microservices Architecture',
                    'REST APIs',
                    'Cloud Architecture',
                    'AI / LLM Integration',
                    'Database Systems',
                    'Enterprise Development',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social / Connect Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sm font-medium text-white flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sm font-medium text-white flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Technology Stack & Engineering Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Built With Modern Engineering
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Designed with scalable architecture and modern engineering practices to support institutional workloads and future expansion.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 hover:border-cyan-500/50 transition-colors shadow-lg"
              >
                <Code2 className="w-6 h-6 text-cyan-400 mx-auto" />
                <span className="block text-sm font-semibold text-white font-mono">{tech}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
