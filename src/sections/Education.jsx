import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const timeline = [
    {
      period: '2023 – 2027',
      degree: 'B.E. Computer Science & Engineering',
      institution: 'KVCET, Chennai',
      score: 'CGPA: 8.55/10'
    },
    {
      period: 'Class XII',
      degree: 'Higher Secondary Education',
      institution: 'Atomic Energy Higher Secondary School No.2',
      score: '82.5%'
    },
    {
      period: 'Class X',
      degree: 'Secondary School Education',
      institution: 'Atomic Energy Central School No.1',
      score: '76.0%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-surface/10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="05 · Education" 
          subtitle="Academic Background"
        />

        <div className="max-w-4xl mx-auto mt-12 relative">
          {/* Vertical line connecting timeline */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-6 relative pl-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-6 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_12px_rgba(168,85,247,0.6)] z-10 group-hover:scale-110 transition-transform">
                  <GraduationCap size={16} />
                </div>

                {/* Minimal Card Content: Degree/School & Institution left, Date/Score aligned right */}
                <div className="bg-surface p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 sm:pr-4">
                    <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-text-muted text-sm md:text-base font-medium">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end justify-between sm:justify-start items-center gap-1.5 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800/80 shrink-0">
                    <span className="text-xs md:text-sm font-mono font-semibold text-primary bg-primary/15 px-3 py-1 rounded-full border border-primary/30">
                      {item.period}
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
