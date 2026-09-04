import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Development (Masterclass)',
      company: 'Novitech R&D Private Limited',
      duration: 'Jan 12 – Feb 10, 2025',
      description: 'Completed an intensive one-month masterclass covering full stack web development fundamentals, working hands-on across frontend and backend workflows.'
    },
    {
      title: 'Full Stack Development Intern',
      company: 'Retech Solutions Pvt Ltd',
      duration: 'Jan 25 – Feb 10, 2025',
      description: 'Built a Django-based online library management system, implementing core features for managing books, members, and borrowing records — gaining hands-on Python backend and database design experience.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-surface/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="03 · Experience" 
          subtitle="Hands-on industry exposure and practical full-stack training."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-surface p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-background rounded-xl text-primary border border-slate-800 group-hover:scale-105 transition-transform">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-main">{item.title}</h3>
                      <div className="flex items-center text-sm font-semibold text-primary mt-1">
                        <Building2 size={15} className="mr-1.5 shrink-0" />
                        <span>{item.company}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-purple-300 border border-primary/30 text-xs font-medium mb-4">
                  <Calendar size={13} />
                  <span>{item.duration}</span>
                </div>

                <p className="text-text-muted leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
