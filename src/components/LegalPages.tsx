import React from 'react';
import { ArrowLeft, Shield, FileText } from 'lucide-react';

interface LegalPagesProps {
  type: 'privacy' | 'terms';
  onBack: () => void;
}

export default function LegalPages({ type, onBack }: LegalPagesProps) {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20 text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {type === 'privacy' ? (
          <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-white">Privacy Policy</h1>
                <p className="text-xs text-slate-400 font-mono">Last updated: October 2026 • EDUMATRIX AI, Bhopal</p>
              </div>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
                <p>
                  EDUMATRIX AI collects institutional data, administrative contact details, official email addresses, and academic requirement parameters provided when institutions request a demo or onboard onto our assessment platform.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">2. How Information Is Used</h2>
                <p>
                  We use collected information strictly to provide, maintain, and improve our examination generation and academic operations platform, communicate with institutional administrators, and ensure secure deployment.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">3. Institutional Data Security</h2>
                <p>
                  All institutional question papers, student records, and analytics data are encrypted at rest and in transit using enterprise-grade security practices. We maintain strict tenant isolation and data confidentiality.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">4. Cookies & Tracking</h2>
                <p>
                  We use essential session cookies to ensure secure authentication and reliable dashboard performance. No unauthorized third-party trackers are utilized.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">5. Third-Party Services</h2>
                <p>
                  Infrastructure services adhere to rigorous security standards. We do not sell, rent, or trade institutional data to external entities.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">6. Contact Information</h2>
                <p>
                  For privacy inquiries or data governance questions, contact our compliance team in Bhopal, Madhya Pradesh at <span className="text-cyan-400 font-mono">privacy@edumatrix.ai</span>.
                </p>
              </section>
            </div>
          </div>
        ) : (
          <div className="space-y-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-white">Terms of Service</h1>
                <p className="text-xs text-slate-400 font-mono">Last updated: October 2026 • EDUMATRIX AI, Bhopal</p>
              </div>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">1. Service Usage</h2>
                <p>
                  By accessing or using EDUMATRIX AI services, your educational institution agrees to be bound by these Terms of Service and applicable institutional agreements.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">2. Institutional Accounts</h2>
                <p>
                  Authorized administrators are responsible for maintaining the security of institutional accounts, faculty credentials, and role-based access permissions.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">3. Acceptable Use</h2>
                <p>
                  The platform must be used solely for legitimate academic operations, examination paper generation, student preparation, and campus administration.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
                <p>
                  All software, AI models, UI designs, and documentation remain the exclusive intellectual property of EDUMATRIX AI. Institutional data and generated question papers belong to the respective client institution.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">5. Payments & Subscription</h2>
                <p>
                  Institutional subscriptions are billed annually in advance according to the selected plan (Starter, Pro, or Enterprise).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
                <p>
                  EDUMATRIX AI provides high-availability academic automation tools but institutions retain final academic review authority over all examination materials.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-bold text-white">7. Contact Information</h2>
                <p>
                  For legal inquiries, contact EDUMATRIX AI headquarters in Bhopal, Madhya Pradesh at <span className="text-cyan-400 font-mono">legal@edumatrix.ai</span>.
                </p>
              </section>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
