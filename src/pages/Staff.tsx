import PageLayout from '../components/layout/PageLayout';
import { Mail, Linkedin } from 'lucide-react';

export default function Staff() {
  const departments = [
    {
      name: "Administration",
      staff: [
        { name: "Dr. Margaret Akello", role: "Principal", bio: "Leading Antorita for over 15 years with a passion for holistic education.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" },
        { name: "Samuel Otieno", role: "Deputy Principal", bio: "Expert in school curriculum development and student character building.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" }
      ]
    },
    {
      name: "Academics - Primary",
      staff: [
        { name: "Jane Doe", role: "Senior Teacher, Grade 4", bio: "Specializes in early childhood literacy and creative arts.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961" },
        { name: "Robert Smith", role: "Math Specialist", bio: "Passionate about making mathematics accessible and fun for all students.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070" }
      ]
    },
    {
      name: "Academics - Junior Secondary",
      staff: [
        { name: "Sarah Williams", role: "Science Instructor", bio: "Leading our STEM programs with hands-on laboratory experiences.", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2a04?q=80&w=1974" },
        { name: "Michael Cheng", role: "Languages & Humanities", bio: "Brings multilingual expertise and global perspective to the classroom.", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974" }
      ]
    }
  ];

  return (
    <PageLayout 
      title="Meet Our Staff" 
      subtitle="The dedicated professionals who make Antorita a home of excellence and character."
    >
      <div className="flex flex-col gap-24">
        {departments.map((dept, i) => (
          <section key={i}>
            <div className="flex items-center gap-6 mb-12">
              <h3 className="font-display font-bold text-3xl text-school-blue-900 border-l-4 border-school-gold-500 pl-6 shrink-0">
                {dept.name}
              </h3>
              <div className="h-[1px] bg-slate-100 w-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {dept.staff.map((p, j) => (
                <div key={j} className="flex flex-col md:flex-row gap-8 bg-slate-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                  <div className="w-full md:w-48 h-64 md:h-auto rounded-2xl overflow-hidden shrink-0">
                    <img src={p.img} className="w-full h-full object-cover" alt={p.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="font-display font-bold text-2xl text-school-blue-900 mb-1">{p.name}</div>
                    <div className="text-school-gold-600 font-bold text-xs uppercase tracking-widest mb-4">{p.role}</div>
                    <p className="text-slate-600 text-sm italic mb-6 leading-relaxed">
                      "{p.bio}"
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="p-2 bg-white rounded-lg text-slate-400 hover:text-school-blue-900 transition-colors shadow-sm"><Mail size={18} /></a>
                      <a href="#" className="p-2 bg-white rounded-lg text-slate-400 hover:text-blue-600 transition-colors shadow-sm"><Linkedin size={18} /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        
        {/* Recruitment CTA */}
        <section className="bg-school-blue-900 rounded-[3rem] p-12 md:p-20 text-center text-white">
          <h3 className="font-display font-bold text-3xl mb-6">Want to Join our Faculty?</h3>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            We are always looking for passionate, driven educators who share our commitment to excellence. Check out our open positions and legacy of teaching.
          </p>
          <button className="btn-secondary">View Career Opportunities</button>
        </section>
      </div>
    </PageLayout>
  );
}
