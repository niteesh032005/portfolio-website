import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { name: 'ReactJS, NodeJS & Java', issuer: 'Infosys Springboard' },
    { name: 'Google UX Design', issuer: 'Coursera' },
    { name: 'Full Stack Development', issuer: 'Udemy' },
    { name: 'Oracle Foundation Certification', issuer: 'Oracle' },
    { name: 'Virtual Experience Programs', issuer: 'Forage' },
    { name: 'Google Cloud Cybersecurity', issuer: 'Credly' },
  ];

  return (
    <section id="certifications" className="py-20 bg-surface/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="06 · Certificates" 
          subtitle="Credentials"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-surface border-l-4 border-primary p-6 rounded-r-2xl border-t border-r border-b border-slate-800/80 shadow-md flex items-start space-x-4 hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-2.5 bg-background rounded-xl text-primary shrink-0 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">{cert.name}</h4>
                <p className="text-sm font-semibold text-primary/90 mt-1.5">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
