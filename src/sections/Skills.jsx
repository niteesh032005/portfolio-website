import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Layout, FileCode2, Terminal, MonitorSmartphone, Database, GitBranch } from 'lucide-react';
import { FaGithub, FaFigma } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML', description: 'Semantic structure', icon: <Layout size={24} /> },
    { name: 'CSS', description: 'Responsive styling', icon: <MonitorSmartphone size={24} /> },
    { name: 'JavaScript', description: 'Dynamic logic', icon: <Terminal size={24} /> },
    { name: 'React', description: 'UI components', icon: <FileCode2 size={24} /> },
    { name: 'Python', description: 'Backend scripts', icon: <Database size={24} /> },
    { name: 'Figma', description: 'UI/UX design', icon: <FaFigma size={24} /> },
    { name: 'Git', description: 'Version control', icon: <GitBranch size={24} /> },
    { name: 'GitHub', description: 'Collaboration', icon: <FaGithub size={24} /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="My Skills" 
          subtitle="Here are the technologies and tools I use to build modern web applications."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-surface border border-slate-800 p-6 rounded-xl flex flex-col items-center text-center hover:border-primary/50 transition-colors cursor-default shadow-md"
            >
              <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-primary mb-4 shadow-inner">
                {skill.icon}
              </div>
              <h4 className="text-lg font-semibold text-text-main mb-1">{skill.name}</h4>
              <p className="text-sm text-text-muted">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
