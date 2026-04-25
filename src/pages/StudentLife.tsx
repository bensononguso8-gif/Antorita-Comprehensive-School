import PageLayout from '../components/layout/PageLayout';
import { Camera, Music, Palette, Trophy, Users, Star } from 'lucide-react';

export default function StudentLife() {
  const activities = [
    { icon: <Trophy />, title: "Sports & Athletics", items: ["Football Team", "Basketball", "Swimming", "Track & Field"] },
    { icon: <Palette />, title: "Arts & Culture", items: ["Visual Arts", "Drama Club", "Modern Dance", "Photography"] },
    { icon: <Music />, title: "Music & Performance", items: ["School Choir", "Orchestra", "Jazz Band", "Musical Theater"] },
    { icon: <Users />, title: "Clubs & Societies", items: ["Robotics Club", "Debate Society", "Environment Club", "Scouts"] },
  ];

  return (
    <PageLayout 
      title="Beyond the Classroom" 
      subtitle="Education at Antorita extends far beyond textbooks. Explore our vibrant student culture and activities."
    >
      <div className="flex flex-col gap-24">
        {/* Culture Section */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
               <img src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1974" className="w-full h-full object-cover" alt="Student Event" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-school-gold-500/10 rounded-3xl -z-0"></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">Life at Antorita</h2>
            <h3 className="font-display font-bold text-4xl text-school-blue-900 mb-6">A Vibrant Community</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              We believe that true education happens when students explore their passions. Whether it's on the sports field, the stage, or within a specialized club, our students are encouraged to lead, collaborate, and innovate.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="flex flex-col gap-2">
                  <span className="text-3xl font-display font-bold text-school-blue-900">20+</span>
                  <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">Active Clubs</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-3xl font-display font-bold text-school-blue-900">15+</span>
                  <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">Annual Events</span>
               </div>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section>
          <div className="text-center mb-16">
            <h3 className="font-display font-bold text-4xl text-school-blue-900">Clubs and Activities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((act, i) => (
              <div key={i} className="card-academic">
                <div className="w-12 h-12 bg-school-blue-900 text-school-gold-500 flex items-center justify-center rounded-xl mb-6">
                  {act.icon}
                </div>
                <h4 className="font-display font-bold text-xl text-school-blue-900 mb-4">{act.title}</h4>
                <ul className="space-y-3">
                  {act.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <Star size={14} className="text-school-gold-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Preview */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">Visual Stories</h2>
              <h3 className="font-display font-bold text-4xl text-school-blue-900">Photo Gallery</h3>
            </div>
            <button className="btn-primary flex items-center gap-2">View Full Gallery <Camera size={20} /></button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1,2,3,4,5,6,7,8].map(i => (
               <div key={i} className={i % 3 === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}>
                 <img 
                    src={`https://picsum.photos/seed/gall${i}/800/600`} 
                    className="w-full h-full object-cover rounded-2xl hover:scale-[1.02] transition-transform cursor-pointer shadow-sm" 
                    alt="Gallery item"
                    referrerPolicy="no-referrer"
                 />
               </div>
             ))}
          </div>
        </section>

        {/* Events Calendar Preview */}
        <section className="bg-slate-50 p-12 md:p-20 rounded-[3rem]">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="font-display font-bold text-3xl text-school-blue-900 mb-6">Upcoming Events</h3>
                 <div className="space-y-6">
                    {[
                      { date: "Oct 24", title: "Annual Cultural Day Festival", time: "09:00 AM" },
                      { date: "Nov 02", title: "Inter-School Science Fair", time: "10:30 AM" },
                      { date: "Nov 15", title: "Parent Engagement Workshop", time: "02:00 PM" }
                    ].map((event, i) => (
                      <div key={i} className="flex gap-6 items-center bg-white p-6 rounded-2xl shadow-sm group hover:shadow-md transition-shadow">
                        <div className="bg-school-blue-900 text-white p-4 rounded-xl flex flex-col items-center justify-center min-w-[80px]">
                           <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                           <span className="text-2xl font-bold font-display">{event.date.split(' ')[1]}</span>
                        </div>
                        <div>
                           <h4 className="font-bold text-school-blue-900 group-hover:text-school-gold-600 transition-colors">{event.title}</h4>
                           <p className="text-sm text-slate-500">{event.time} @ School Auditorium</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-school-blue-900 rounded-3xl p-10 text-white flex flex-col justify-center items-center text-center">
                 <Trophy className="w-20 h-20 text-school-gold-500 mb-8" />
                 <h3 className="font-display font-bold text-3xl mb-4">Champions Again!</h3>
                 <p className="text-slate-300 mb-8 leading-relaxed">
                   Our Senior Football Team brought home the Regional Cup for the third consecutive year. We are extremely proud of our athletes!
                 </p>
                 <button className="btn-secondary">Sports Achievements</button>
              </div>
           </div>
        </section>
      </div>
    </PageLayout>
  );
}
