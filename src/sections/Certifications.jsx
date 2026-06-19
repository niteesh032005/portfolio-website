import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: 'UX Design Certification', issuer: 'Google / Coursera', year: '2025' },
    { title: 'AI & Machine Learning Certification', issuer: 'IBM', year: '2024' },
    { title: 'Web Development Certification', issuer: 'freeCodeCamp', year: '2024' },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Certifications" 
          subtitle="Continuous learning to stay updated with industry trends."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border-l-4 border-primary p-6 rounded-r-xl shadow-md flex items-start space-x-4"
            >
              <Award className="text-primary mt-1 shrink-0" size={28} />
              <div>
                <h4 className="text-lg font-bold text-text-main">{cert.title}</h4>
                <p className="text-sm text-text-muted mt-1">{cert.issuer}</p>
                <span className="inline-block mt-2 text-xs font-semibold bg-background text-primary px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
