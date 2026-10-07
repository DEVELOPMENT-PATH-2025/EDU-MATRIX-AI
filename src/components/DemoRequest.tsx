import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function DemoRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    instituteName: '',
    contactName: '',
    designation: 'Principal',
    email: '',
    phone: '',
    institutionType: 'Engineering College',
    products: {
      qGenius: true,
      examArchitect: false,
      campusUtility: false,
      completeSuite: false,
    },
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Institutional Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's Build Your Institution's AI-Powered Academic Future.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tell us about your institution and we'll help you identify the right EDUMATRIX AI solution.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Demo Request Submitted Successfully!
              </h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base">
                Thank you, <span className="text-white font-semibold">{formData.contactName || 'Colleague'}</span>. Our institutional solutions team in Bhopal will reach out to <span className="text-cyan-400 font-mono">{formData.email || 'your email'}</span> within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Institute Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">
                    Institute / College Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. UIT Barkatullah University, Bhopal"
                    value={formData.instituteName}
                    onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Contact Person */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">
                    Contact Person Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Alok Sharma"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Designation */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">
                    Designation
                  </label>
                  <select
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Director">Director</option>
                    <option value="Principal">Principal</option>
                    <option value="HOD">HOD</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Examination Coordinator">Examination Coordinator</option>
                    <option value="IT Administrator">IT Administrator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">
                    Official Email ID <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="registrar@college.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">
                    Phone Number <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

              </div>

              {/* Institution Type */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">
                  Institution Type
                </label>
                <select
                  value={formData.institutionType}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="University">University</option>
                  <option value="Engineering College">Engineering College</option>
                  <option value="Degree College">Degree College</option>
                  <option value="Law College">Law College</option>
                  <option value="School">School</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Products Interested In (Checkboxes) */}
              <div className="space-y-3">
                <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">
                  Products Interested In
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.products.qGenius}
                      onChange={(e) => setFormData({
                        ...formData,
                        products: { ...formData.products, qGenius: e.target.checked }
                      })}
                      className="w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-800 focus:ring-0"
                    />
                    <span className="text-sm text-slate-200">Q-Genius (Assessment Engine)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.products.examArchitect}
                      onChange={(e) => setFormData({
                        ...formData,
                        products: { ...formData.products, examArchitect: e.target.checked }
                      })}
                      className="w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-800 focus:ring-0"
                    />
                    <span className="text-sm text-slate-200">Exam Architect AI (Student Learning)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.products.campusUtility}
                      onChange={(e) => setFormData({
                        ...formData,
                        products: { ...formData.products, campusUtility: e.target.checked }
                      })}
                      className="w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-800 focus:ring-0"
                    />
                    <span className="text-sm text-slate-200">Faculty Timer & Campus Utility</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.products.completeSuite}
                      onChange={(e) => setFormData({
                        ...formData,
                        products: { ...formData.products, completeSuite: e.target.checked }
                      })}
                      className="w-4 h-4 rounded text-cyan-500 bg-slate-900 border border-slate-800 focus:ring-0"
                    />
                    <span className="text-sm text-slate-200">Complete EDUMATRIX AI Suite</span>
                  </label>
                </div>
              </div>

              {/* Message / Specific Requirements */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">
                  Message / Specific Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your examination cycle, student strength, or specific custom requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                Request Institutional Demo →
                <Send className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Your information is kept confidential and will only be used to respond to your request.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
