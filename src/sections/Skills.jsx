import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Layout, Server, Database, Bug, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      icon: <Layout size={20} />,
      skills: ['React.js (Vite)', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'BACKEND',
      icon: <Server size={20} />,
      skills: ['Node.js', 'Express.js', 'Java', 'REST APIs', 'Socket.io', 'JWT Auth']
    },
    {
      title: 'DATABASES',
      icon: <Database size={20} />,
      skills: ['MongoDB', 'MySQL', 'Mongoose']
    },
    {
      title: 'TESTING',
      icon: <Bug size={20} />,
      skills: ['Selenium', 'Appium']
    },
    {
      title: 'TOOLS & PLATFORMS',
      icon: <Wrench size={20} />,
      skills: ['VS Code', 'Git', 'GitHub', 'Postman', 'MongoDB Compass']
    },
    {
      title: 'CORE CS',
      icon: <BookOpen size={20} />,
      skills: ['DSA', 'DBMS', 'OOPs', 'OS', 'Computer Networks']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface/10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="02 · Skills" 
          subtitle="Technical Stack"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                  <div className="p-2.5 bg-background rounded-xl text-primary border border-slate-800 group-hover:scale-110 transition-transform shadow-inner shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-text-main group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-2 bg-background/80 border border-slate-700/80 rounded-xl text-xs md:text-sm font-medium text-text-main hover:border-primary/60 hover:text-primary hover:bg-primary/10 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
