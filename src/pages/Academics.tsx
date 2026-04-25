import PageLayout from '../components/layout/PageLayout';
import { BookMarked, Atom, Globe, Binary, Microscope, Music, Palette, Trophy } from 'lucide-react';

export default function Academics() {
  const departments = [
    {
      title: "Primary School",
      description: "Laying a solid foundation for lifelong learning through a balanced and engaging curriculum.",
      levels: "Grades 1 - 6"
    },
    {
      title: "Junior Secondary",
      description: "Transitioning students into deeper subject mastery and critical developmental milestones.",
      levels: "Grades 7 - 9"
    }
  ];

  const subjects = [
    { icon: <BookMarked />, name: "English Language" },
    { icon: <Binary />, name: "Mathematics" },
    { icon: <Atom />, name: "Science & tech" },
    { icon: <Globe />, name: "Social Studies" },
    { icon: <Microscope />, name: "Home Science" },
    { icon: <Palette />, name: "Art & Design" },
    { icon: <Music />, name: "Music" },
    { icon: <Trophy />, name: "Physical Education" },
  ];

  return (
    <PageLayout 
      title="Academic Excellence" 
      subtitle="Our comprehensive curriculum is designed to foster intellectual curiosity and practical skills."
    >
      <div className="flex flex-col gap-24">
        {/* Philosophy */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">How We Teach</h2>
          <h3 className="font-display font-bold text-4xl text-school-blue-900 mb-6">Our Teaching Philosophy</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            We believe that every child is unique and has the potential to succeed. Our teaching approach combines traditional academic rigor with modern, learner-centered methodologies (CBC). We emphasize active participation, critical thinking, and the integration of technology in the classroom.
          </p>
        </section>

        {/* Departments */}
        <section className="grid md:grid-cols-2 gap-8">
          {departments.map((dept, i) => (
            <div key={i} className="bg-white border border-slate-100 p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <span className="text-school-gold-600 font-bold text-sm tracking-widest uppercase mb-4 block">{dept.levels}</span>
              <h4 className="font-display font-bold text-3xl text-school-blue-900 mb-4">{dept.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {dept.description}
              </p>
              <button className="text-school-blue-900 font-bold border-b-2 border-school-gold-500 pb-1 hover:text-school-gold-600 transition-colors">
                View Detailed Curriculum
              </button>
            </div>
          ))}
        </section>

        {/* Subjects Grid */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">The Curriculum</h2>
            <h3 className="font-display font-bold text-4xl text-school-blue-900">Subjects Offered</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, i) => (
              <div key={i} className="flex flex-col items-center p-8 rounded-2xl bg-slate-50 hover:bg-school-blue-900 hover:text-white transition-all group">
                <div className="text-school-blue-900 group-hover:text-school-gold-500 mb-4 scale-125 transition-colors">
                  {subject.icon}
                </div>
                <span className="font-bold text-center">{subject.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Environment */}
        <section className="bg-school-blue-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h3 className="font-display font-bold text-4xl mb-6">Modern Learning Facilities</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Academic success is supported by high-quality resources. Our campus features interactive digital classrooms, fully equipped science laboratories, a state-of-the-art computer center, and a library with thousands of physical and digital volumes.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-2 h-2 bg-school-gold-500 rounded-full"></div>
                <span className="font-medium">Digitally Integrated Classrooms</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-2 h-2 bg-school-gold-500 rounded-full"></div>
                <span className="font-medium">Fully Equipped Science & Tech Labs</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-2 h-2 bg-school-gold-500 rounded-full"></div>
                <span className="font-medium">Resource-Rich Library Media Center</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132" className="rounded-2xl" alt="Lab" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073" className="rounded-2xl mt-8" alt="Library" referrerPolicy="no-referrer" />
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
