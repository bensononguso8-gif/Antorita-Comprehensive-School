import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { navItems, schoolInfo } from '../../constants';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <GraduationCap className={cn("w-10 h-10 transition-colors", scrolled ? "text-school-blue-900" : "text-school-gold-500")} />
          <div className="flex flex-col">
            <span className={cn("font-display font-bold text-xl leading-none", scrolled ? "text-school-blue-900" : "text-white")}>
              ANTORITA
            </span>
            <span className={cn("text-[10px] font-medium tracking-widest", scrolled ? "text-slate-500" : "text-school-gold-500/80")}>
              COMPREHENSIVE SCHOOL
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "font-medium transition-colors hover:text-school-gold-500",
                location.pathname === item.path 
                  ? "text-school-gold-500 underline underline-offset-4" 
                  : scrolled ? "text-slate-700" : "text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/admissions" className="btn-secondary py-2 px-6 text-sm">
            Enroll Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2", scrolled ? "text-school-blue-900" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl shadow-xl overflow-hidden border border-slate-100"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-lg font-medium p-2 rounded-lg",
                    location.pathname === item.path ? "text-school-blue-900 bg-slate-50" : "text-slate-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/admissions" className="btn-primary w-full text-center mt-2">
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
