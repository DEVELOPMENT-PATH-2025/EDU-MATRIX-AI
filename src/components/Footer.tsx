import React from 'react';
import { Linkedin, Github, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
  onRequestDemo: () => void;
}

export default function Footer({ onNavigate, onRequestDemo }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              AI-powered academic operations and assessment solutions for modern educational institutions across India.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>contact@edumatrix.ai</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#products" onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  Q-Genius
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  Exam Architect AI
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  Faculty Timer & Campus Utility
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  Founder & CTO
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <button onClick={onRequestDemo} className="hover:text-cyan-400 transition-colors text-left">
                  Request Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('privacy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('terms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 EDUMATRIX AI. All Rights Reserved.</p>
          <p className="font-mono">Bhopal, Madhya Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
