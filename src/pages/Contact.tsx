import PageLayout from '../components/layout/PageLayout';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <PageLayout 
      title="Get In Touch" 
      subtitle="Have a question or want to visit our campus? We'd love to hear from you."
    >
      <div className="flex flex-col gap-24">
        {/* Contact Info & Form */}
        <section className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div>
              <h3 className="font-display font-bold text-3xl text-school-blue-900 mb-6">Contact Information</h3>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Our administrative office is open Monday to Friday from 8:00 AM to 5:00 PM and Saturday from 8:30 AM to 12:30 PM.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                   <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-school-blue-900 group-hover:bg-school-blue-900 group-hover:text-white transition-all shrink-0 shadow-sm border border-slate-100">
                      <MapPin />
                   </div>
                   <div>
                      <div className="font-bold text-school-blue-900 mb-1">Our Location</div>
                      <p className="text-sm text-slate-500 leading-relaxed">123 Academic Drive, Near City Center, Nairobi, Kenya</p>
                   </div>
                </div>

                <div className="flex gap-6 items-start group">
                   <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-school-blue-900 group-hover:bg-school-blue-900 group-hover:text-white transition-all shrink-0 shadow-sm border border-slate-100">
                      <Phone />
                   </div>
                   <div>
                      <div className="font-bold text-school-blue-900 mb-1">Call Us Directly</div>
                      <p className="text-sm text-slate-500 leading-relaxed">+254 700 000 000<br />+254 711 000 000</p>
                   </div>
                </div>

                <div className="flex gap-6 items-start group">
                   <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-school-blue-900 group-hover:bg-school-blue-900 group-hover:text-white transition-all shrink-0 shadow-sm border border-slate-100">
                      <Mail />
                   </div>
                   <div>
                      <div className="font-bold text-school-blue-900 mb-1">Email Support</div>
                      <p className="text-sm text-slate-500 leading-relaxed">info@antoritaschool.edu<br />admissions@antoritaschool.edu</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-school-blue-900 text-white p-10 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-school-gold-500 opacity-10 rounded-full -mr-16 -mt-16"></div>
               <h4 className="font-display font-bold text-2xl mb-4">Follow Our Socials</h4>
               <p className="text-slate-300 text-sm mb-6">Stay updated with our daily school life and announcements.</p>
               <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-school-gold-500 hover:text-school-blue-900 transition-all rounded-lg flex items-center justify-center"><Facebook size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-school-gold-500 hover:text-school-blue-900 transition-all rounded-lg flex items-center justify-center"><Twitter size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-school-gold-500 hover:text-school-blue-900 transition-all rounded-lg flex items-center justify-center"><Instagram size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-school-gold-500 hover:text-school-blue-900 transition-all rounded-lg flex items-center justify-center"><Linkedin size={20} /></a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-12 md:p-16 rounded-3xl border border-slate-100 shadow-xl">
             <div className="flex items-center gap-3 text-school-gold-600 mb-4">
                <MessageSquare size={24} />
                <span className="font-black uppercase tracking-widest text-xs">Send Message</span>
             </div>
             <h3 className="font-display font-bold text-4xl text-school-blue-900 mb-10">Send us an Inquiry</h3>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-school-gold-500 transition-all" 
                        placeholder="John Doe" 
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-school-gold-500 transition-all" 
                        placeholder="john@example.com" 
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject of Inquiry</label>
                   <select 
                      value={formState.subject}
                      onChange={e => setFormState({...formState, subject: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-school-gold-500 transition-all appearance-none"
                   >
                      <option>General Inquiry</option>
                      <option>Admissions & Enrollment</option>
                      <option>Academic Curriculum</option>
                      <option>Sports & Extracurricular</option>
                      <option>Careers & Employment</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Message</label>
                   <textarea 
                      required
                      rows={6}
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-school-gold-500 transition-all resize-none" 
                      placeholder="How can we help you today?"
                   ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-2 group">
                   Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
             </form>
          </div>
        </section>

        {/* Map Placeholder */}
        <section>
           <div className="w-full h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-inner relative flex items-center justify-center">
              <div className="absolute inset-0 grayscale opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074')] bg-cover"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white max-w-sm text-center">
                 <div className="w-16 h-16 bg-school-gold-500 text-school-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin size={32} />
                 </div>
                 <h4 className="font-display font-bold text-2xl text-school-blue-900 mb-2">Visit Our Campus</h4>
                 <p className="text-slate-600 text-sm mb-6">Take a tour of our state-of-the-art facilities and meet our staff.</p>
                 <button className="text-school-blue-900 font-black uppercase text-xs tracking-widest hover:text-school-gold-600 transition-colors">Get Directions on Maps</button>
              </div>
           </div>
        </section>
      </div>
    </PageLayout>
  );
}
