import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { BookOpen, Code, Brain } from 'lucide-react';

const About = () => {
  const cards = [
    {
      title: 'Education',
      icon: <BookOpen className="text-primary mb-4" size={32} />,
      description: 'Currently pursuing a degree in Computer Science Engineering, building a strong foundation in algorithms and software design.'
    },
    {
      title: 'Interests',
      icon: <Code className="text-primary mb-4" size={32} />,
      description: 'Deeply interested in Web Development, creating intuitive user interfaces, and solving complex problems with code.'
    },
    {
      title: 'Current Focus',
      icon: <Brain className="text-primary mb-4" size={32} />,
      description: 'Exploring AI & Technology trends to integrate intelligent features into modern web applications.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="About Me" 
          subtitle="My ultimate goal is to become a highly skilled software developer who builds impactful and scalable digital solutions."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors shadow-lg group"
            >
              <div className="group-hover:-translate-y-1 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-main mb-3">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
