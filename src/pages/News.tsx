import PageLayout from '../components/layout/PageLayout';
import { Search, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const categories = ["All", "Academics", "Sports", "Events", "Student Life", "Announcements"];
  const news = [
    { title: "Celebrating Our 2024 Top Achievers", date: "Oct 20, 2024", cat: "Academics", excerpt: "Antorita Comprehensive School consistently leads in academic performance...", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070" },
    { title: "Upcoming School Cultural Festival", date: "Oct 15, 2024", cat: "Events", excerpt: "Join us for a day of music, dance, and traditional cuisines from across the world...", img: "https://images.unsplash.com/photo-1511578334221-d46f7c584742?q=80&w=2070" },
    { title: "New STEM Laboratory Unveiled", date: "Oct 05, 2024", cat: "Announcements", excerpt: "Our board of governors has officially opened the new state-of-the-art computer science suite...", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086" },
    { title: "Inter-School Football Champions", date: "Sep 28, 2024", cat: "Sports", excerpt: "The Hurricanes secured a 3-0 victory in the regional finals last Saturday...", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1964" },
    { title: "Mental Health Awareness Week", date: "Sep 20, 2024", cat: "Student Life", excerpt: "Workshops and peer-led sessions to promote emotional wellbeing among our students...", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069" },
    { title: "Parent engagement Workshop Success", date: "Sep 15, 2024", cat: "Events", excerpt: "Record attendance at our first consultative meeting for newly enrolled families...", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" }
  ];

  return (
    <PageLayout 
      title="School News & Updates" 
      subtitle="Stay connected with the latest stories, achievements, and announcements from Antorita."
    >
      <div className="flex flex-col gap-12">
        {/* Search & Filter */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-100">
           <div className="flex flex-wrap gap-2">
              {categories.map((c, i) => (
                <button 
                  key={c} 
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-school-blue-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-200'}`}
                >
                  {c}
                </button>
              ))}
           </div>
           <div className="relative w-full md:w-80">
              <input type="text" placeholder="Search news..." className="w-full bg-white border border-slate-200 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-school-gold-500 transition-all text-sm" />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
           </div>
        </section>

        {/* Featured Story */}
        <section className="group cursor-pointer">
           <div className="flex flex-col lg:flex-row gap-8 bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all shadow-sm">
              <div className="lg:w-1/2 relative overflow-hidden h-[300px] lg:h-auto">
                 <img src={news[0].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Featured" referrerPolicy="no-referrer" />
                 <div className="absolute top-8 left-8 py-2 px-4 bg-school-gold-500 text-school-blue-900 font-bold text-xs uppercase rounded-xl z-10 tracking-widest leading-none">Featured Story</div>
              </div>
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                 <div className="flex items-center gap-3 text-slate-400 text-sm font-medium mb-4">
                    <Calendar size={16} /> {news[0].date} &bull; {news[0].cat}
                 </div>
                 <h2 className="font-display font-bold text-3xl md:text-5xl text-school-blue-900 mb-6 leading-tight group-hover:text-school-gold-600 transition-colors">
                    {news[0].title}
                 </h2>
                 <p className="text-slate-600 text-lg mb-8 line-clamp-3">
                    {news[0].excerpt}
                 </p>
                 <button className="flex items-center gap-2 font-bold text-school-blue-900 group-hover:gap-4 transition-all uppercase text-sm tracking-widest">
                    Read the Full Story <ChevronRight size={20} className="text-school-gold-500" />
                 </button>
              </div>
           </div>
        </section>

        {/* News Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {news.slice(1).map((item, i) => (
             <div key={i} className="group card-academic !p-0 !rounded-[2rem] overflow-hidden flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                   <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="News" referrerPolicy="no-referrer" />
                   <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white text-school-blue-900 text-[10px] font-black rounded-lg uppercase tracking-widest">
                     {item.cat}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-4 uppercase tracking-wider">
                      <Calendar size={14} /> {item.date}
                   </div>
                   <h4 className="font-display font-bold text-xl text-school-blue-900 mb-4 group-hover:text-school-gold-600 transition-colors">
                      {item.title}
                   </h4>
                   <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                      {item.excerpt}
                   </p>
                   <button className="mt-auto flex items-center gap-2 text-xs font-bold text-school-blue-900 hover:text-school-gold-600 transition-colors uppercase tracking-widest">
                      Read More <ChevronRight size={16} />
                   </button>
                </div>
             </div>
           ))}
        </section>

        {/* Load More */}
        <div className="flex justify-center py-8">
           <button className="px-12 py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-600 hover:border-school-blue-900 hover:text-school-blue-900 transition-all">
              Load More Stories
           </button>
        </div>
      </div>
    </PageLayout>
  );
}
