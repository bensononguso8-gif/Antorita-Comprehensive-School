import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { schoolInfo } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050338691-c1e53d076efd?q=80&w=2070" 
            className="w-full h-screen object-cover brightness-[0.4]"
            alt="School Campus"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-school-gold-500/20 text-school-gold-500 font-bold tracking-widest text-sm mb-6 uppercase">
              Welcome to Antorita
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Shaping Future <br />
              <span className="text-school-gold-500">Leaders</span> through <br />
              Excellence.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-xl">
              {schoolInfo.motto}. Providing a world-class learning environment for the thinkers and doers of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-secondary">
                Apply Now
              </Link>
              <Link to="/contact" className="px-8 py-3 rounded-lg font-medium border border-white text-white hover:bg-white hover:text-school-blue-900 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
            {[
              { label: 'Academic Years', value: '25+' },
              { label: 'Certified Teachers', value: '50+' },
              { label: 'Excellence Awards', value: '120+' },
              { label: 'Student Success', value: '100%' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10"
              >
                <div className="text-school-gold-500 text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">About the School</h2>
          <h3 className="font-display font-bold text-4xl text-school-blue-900 mb-6 leading-tight">
            A Legacy of Excellence in Modern Education
          </h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Antorita Comprehensive School is more than just an educational institution; it is a community where curiosity is sparked and dreams are nurtured. Our balanced curriculum emphasizes not only academic mastery but also character, creativity, and critical thinking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              "Personalized Learning",
              "Holistic Development",
              "State-of-the-Art Labs",
              "Expert Faculty"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center">
                <CheckCircle2 className="text-school-gold-500" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-school-blue-900 font-bold hover:gap-4 transition-all">
            Learn More About Us <ArrowRight size={20} />
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?q=80&w=2070" className="w-full h-full object-cover" alt="Students in Library" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-school-gold-500 p-8 rounded-3xl shadow-xl hidden lg:block">
            <Trophy className="text-school-blue-900 w-12 h-12 mb-4" />
            <div className="text-school-blue-900 font-display font-bold text-2xl">Top Rated School</div>
            <div className="text-school-blue-900/70 font-medium">Awarded in 2024</div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">Why Antorita?</h2>
            <h3 className="font-display font-bold text-4xl text-school-blue-900">Our Pillars of Success</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-academic text-center group">
              <div className="w-16 h-16 bg-school-blue-900/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-school-blue-900 transition-colors">
                <BookOpen className="text-school-blue-900 group-hover:text-white" />
              </div>
              <h4 className="font-display font-bold text-xl mb-4 text-school-blue-900">Academic Excellence</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our curriculum is designed to challenge students and prepare them for global opportunities through rigorous academic standards.
              </p>
            </div>
            
            <div className="card-academic text-center group">
              <div className="w-16 h-16 bg-school-blue-900/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-school-blue-900 transition-colors">
                <Trophy className="text-school-blue-900 group-hover:text-white" />
              </div>
              <h4 className="font-display font-bold text-xl mb-4 text-school-blue-900">Co-curricular Activities</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                From sports to drama and music, we encourage students to explore their talents and develop well-rounded personalities.
              </p>
            </div>
            
            <div className="card-academic text-center group">
              <div className="w-16 h-16 bg-school-blue-900/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-school-blue-900 transition-colors">
                <Users className="text-school-blue-900 group-hover:text-white" />
              </div>
              <h4 className="font-display font-bold text-xl mb-4 text-school-blue-900">Supportive Community</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                A safe and inclusive environment where every student is known, valued, and encouraged to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">Latest Updates</h2>
            <h3 className="font-display font-bold text-4xl text-school-blue-900">What's Happening at School</h3>
          </div>
          <Link to="/news" className="btn-primary">View All News</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { tag: 'Academics', title: 'Top Performance in National Exams', date: 'March 15, 2024' },
            { tag: 'Sports', title: 'Annual Inter-School Sports Tournament', date: 'March 10, 2024' },
            { tag: 'Events', title: 'Parent-Teacher Consultative Meeting', date: 'March 05, 2024' },
          ].map((news, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/9] bg-slate-200 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-school-gold-500 text-school-blue-900 text-xs font-bold rounded-lg uppercase">
                  {news.tag}
                </div>
                <img src={`https://picsum.photos/seed/news${i}/600/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="News item" referrerPolicy="no-referrer" />
              </div>
              <div className="text-sm text-slate-500 mb-2 font-medium">{news.date}</div>
              <h4 className="font-display font-bold text-xl text-school-blue-900 group-hover:text-school-gold-600 transition-colors">
                {news.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-school-blue-900 text-white py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-sm font-bold text-school-gold-500 tracking-widest uppercase mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {[
              {
                text: "Attending Antorita has been the best decision for our children. The teachers are incredibly dedicated and the curriculum is second to none.",
                author: "Mrs. Sarah Jenkins",
                role: "Parent"
              },
              {
                text: "The school environment here is so inspiring. I have not only grown academically but also discovered my passion for music and public speaking.",
                author: "Joshua Mbeki",
                role: "Student President"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-school-gold-500 text-school-gold-500" />)}
                </div>
                <p className="text-xl italic mb-8 text-slate-300 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-display font-bold text-lg text-white">{t.author}</div>
                  <div className="text-school-gold-500 text-sm font-medium">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-32 text-center">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-school-gold-500/10 rounded-full blur-2xl"></div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-school-blue-900 mb-6">Ready to Join our Community?</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Take the first step towards a bright future for your child. Admissions are currently open for the upcoming academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn-primary flex items-center justify-center gap-2">
               Begin Application <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="px-8 py-3 rounded-lg font-bold border-2 border-school-blue-900 text-school-blue-900 hover:bg-school-blue-900 hover:text-white transition-all">
              Talk to Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
