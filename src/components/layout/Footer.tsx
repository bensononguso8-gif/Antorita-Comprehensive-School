import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { schoolInfo, navItems } from '../../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <GraduationCap className="w-10 h-10 text-school-gold-500" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-white tracking-wider">
                  ANTORITA
                </span>
                <span className="text-[10px] font-medium tracking-widest text-slate-400">
                  COMPREHENSIVE SCHOOL
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Nurturing the next generation of leaders through holistic education, academic excellence, and character development since 1998.
            </p>
            <div className="flex gap-4">
              <a href={schoolInfo.social.facebook} className="hover:text-school-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href={schoolInfo.social.twitter} className="hover:text-school-gold-500 transition-colors"><Twitter size={20} /></a>
              <a href={schoolInfo.social.instagram} className="hover:text-school-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href={schoolInfo.social.linkedin} className="hover:text-school-gold-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm">
              {navItems.slice(0, 4).map(item => (
                <li key={item.path}><Link to={item.path} className="hover:text-school-gold-500 transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm">
              {navItems.slice(4).map(item => (
                <li key={item.path}><Link to={item.path} className="hover:text-school-gold-500 transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-school-gold-500 shrink-0" />
                <span>{schoolInfo.address}</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-school-gold-500 shrink-0" />
                <span>{schoolInfo.phone}</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-school-gold-500 shrink-0" />
                <span>{schoolInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Antorita Comprehensive School. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
