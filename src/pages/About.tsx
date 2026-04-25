import PageLayout from '../components/layout/PageLayout';
import { Target, Eye, Heart, BookOpen, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <PageLayout 
      title="About Antorita" 
      subtitle="Discover our rich history, mission, and the vision that drives our commitment to excellent education."
    >
      <div className="flex flex-col gap-24">
        {/* History Section */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">Our Journey</h2>
            <h3 className="font-display font-bold text-4xl text-school-blue-900 mb-6">Building a Legacy</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 1998, Antorita Comprehensive School began with a simple mission: to provide a nurturing environment where children could receive high-quality education that balances academic rigor with moral grounding.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Over the past two decades, we have grown from a small primary school into a comprehensive institution offering Primary and Junior Secondary education, consistently ranking among the top-performing schools in our region.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071" 
              className="w-full h-full object-cover" 
              alt="School Campus" 
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-school-blue-900 p-12 rounded-3xl text-white">
            <Eye className="text-school-gold-500 w-12 h-12 mb-6" />
            <h3 className="font-display font-bold text-3xl mb-4">Our Vision</h3>
            <p className="text-slate-300">
              To be a leading center of excellence in education, developing globally competitive individuals who are grounded in integrity and societal values.
            </p>
          </div>
          <div className="bg-slate-100 p-12 rounded-3xl text-school-blue-900">
            <Target className="text-school-gold-600 w-12 h-12 mb-6" />
            <h3 className="font-display font-bold text-3xl mb-4">Our Mission</h3>
            <p className="text-slate-600">
              To provide a holistic education that empowers students with knowledge, skills, and values necessary to succeed in a dynamic world while fostering a spirit of service.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-school-gold-600 tracking-widest uppercase mb-4">What We Stand For</h2>
            <h3 className="font-display font-bold text-4xl text-school-blue-900">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Integrity", text: "Honesty and strong moral principles in all our actions." },
              { icon: <Heart />, title: "Compassion", text: "Empathy and care for one another and the wider community." },
              { icon: <Zap />, title: "Innovation", text: "Embracing new ideas and creative problem-solving." },
              { icon: <BookOpen />, title: "Excellence", text: "Striving for the highest standards in everything we do." },
              { icon: <ShieldCheck />, title: "Respect", text: "Valuing the diversity and dignity of every individual." },
              { icon: <Zap />, title: "Leadership", text: "Inspiring others through positive action and vision." }
            ].map((value, i) => (
              <div key={i} className="card-academic">
                <div className="text-school-gold-600 mb-4">{value.icon}</div>
                <h4 className="font-display font-bold text-xl mb-2 text-school-blue-900">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principal Message */}
        <section className="bg-slate-50 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" 
                className="w-full h-full object-cover" 
                alt="Principal" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-3xl text-school-blue-900 mb-6">A Message from the Principal</h3>
              <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                "Welcome to Antorita Comprehensive School. It is with great pride and joy that I welcome you to our community. Education is the most powerful tool we can use to change the world, and here at Antorita, we take that responsibility seriously. Our goal is to ensure that every student leaves our gates not just with a certificate, but as a person of character, ready to contribute meaningfully to society."
              </p>
              <div>
                <div className="font-bold text-xl text-school-blue-900">Dr. Margaret Akello</div>
                <div className="text-school-gold-600 font-medium tracking-wide text-sm uppercase">Principal & CEO</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
