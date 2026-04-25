import PageLayout from '../components/layout/PageLayout';
import { ClipboardList, UserCheck, CreditCard, HelpCircle, Download, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Admissions() {
  const steps = [
    { title: "Application", desc: "Complete the online application form or visit our front office to pick up a physical copy." },
    { title: "Assessment", desc: "Prospective students undergo a friendly entry assessment to help us understand their learning needs." },
    { title: "Interview", desc: "A brief meeting with parents and students to discuss expectations and school culture." },
    { title: "Enrollment", desc: "Once accepted, complete the registration by providing required documents and fee commitment." }
  ];

  return (
    <PageLayout 
      title="Join Our Community" 
      subtitle="We are delighted that you are considering Antorita for your child's education. Follow our simple process to get started."
    >
      <div className="flex flex-col gap-24">
        {/* Intro */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-display font-bold text-4xl text-school-blue-900 mb-6">Enrollment Overview</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Admissions at Antorita Comprehensive School are open throughout the year, subject to space availability in each grade. We seek to admit students who will thrive in our academic and social environment.
            </p>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-school-gold-500">
                <h4 className="font-bold text-school-blue-900 mb-2">Age Requirements</h4>
                <p className="text-sm text-slate-600">Students must meet the age criteria set by the education ministry for their respective grades.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-school-gold-500">
                <h4 className="font-bold text-school-blue-900 mb-2">Documentation</h4>
                <p className="text-sm text-slate-600">Please have birth certificate, previous school records (if applicable), and medical history ready.</p>
              </div>
            </div>
          </div>
          <div className="bg-school-blue-900 p-12 rounded-[2rem] text-white">
            <h4 className="font-display font-bold text-2xl mb-6">Request Info Package</h4>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Parent Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-school-gold-500" placeholder="e.g. John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-school-gold-500" placeholder="e.g. john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Interested Grade</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-school-gold-500 appearance-none">
                  <option className="text-slate-950">Primary (G1-G6)</option>
                  <option className="text-slate-950">Junior Secondary (G7-G9)</option>
                </select>
              </div>
              <button className="btn-secondary w-full py-4 mt-4">Send Info Request</button>
            </form>
          </div>
        </section>

        {/* Steps */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">Admissions</h2>
            <h3 className="font-display font-bold text-4xl text-school-blue-900">Application Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="mb-6 w-12 h-12 bg-school-gold-500 text-school-blue-900 font-display font-black text-2xl flex items-center justify-center rounded-xl shadow-lg shadow-school-gold-500/20">
                  {i + 1}
                </div>
                <h4 className="font-display font-bold text-xl mb-3 text-school-blue-900">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-6 -right-4 text-slate-200" size={24} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="card-academic flex flex-col items-center text-center p-12">
            <Download className="text-school-blue-900 w-12 h-12 mb-6" />
            <h4 className="font-display font-bold text-2xl text-school-blue-900 mb-4">Download Forms</h4>
            <p className="text-slate-600 mb-8 max-w-xs uppercase text-xs font-bold tracking-tighter">PDF Documents</p>
            <div className="w-full flex gap-4">
              <button className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-bold transition-colors">Prospectus</button>
              <button className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-bold transition-colors">Fee Schedule</button>
            </div>
          </div>
          <div className="card-academic flex flex-col items-center text-center p-12">
            <HelpCircle className="text-school-gold-600 w-12 h-12 mb-6" />
            <h4 className="font-display font-bold text-2xl text-school-blue-900 mb-4">Have Questions?</h4>
            <p className="text-slate-600 mb-8">Not sure about something? Visit our FAQ section or get in touch with our admissions office.</p>
            <div className="w-full flex gap-4">
              <button className="flex-1 px-4 py-2 border-2 border-school-blue-900 text-school-blue-900 font-bold rounded-lg text-sm hover:bg-school-blue-900 hover:text-white transition-all">Common FAQ</button>
              <button className="flex-1 px-4 py-2 bg-school-blue-900 text-white font-bold rounded-lg text-sm hover:bg-school-blue-800 transition-colors">Call Office</button>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="max-w-3xl mx-auto">
           <div className="text-center mb-12">
              <h3 className="font-display font-bold text-3xl text-school-blue-900">Frequently Asked Questions</h3>
           </div>
           <div className="space-y-4">
              {[
                { q: "Is transport provided for the kids?", a: "Yes, we operate a fleet of safe and reliable school buses across major routes in the city." },
                { q: "What extracurricular activities are available?", a: "We offer sports, music, drama, robotics, and several character-building clubs." },
                { q: "Do you offer scholarships?", a: "Academic and talent-based scholarships are available for deserving students on a case-by-case basis." }
              ].map((faq, i) => (
                <details key={i} className="group border border-slate-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer bg-white">
                    <span className="font-bold text-school-blue-900">{faq.q}</span>
                    <span className="text-school-gold-600 transition group-open:rotate-180">
                      <ArrowRight size={20} className="rotate-90" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                    {faq.a}
                  </div>
                </details>
              ))}
           </div>
        </section>
      </div>
    </PageLayout>
  );
}
