import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import portfolioImg from '../assets/project_portfolio.png';
import eventsImg from '../assets/project_events.png';
import expensesImg from '../assets/project_expenses.png';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio built to showcase my skills and projects. Features dark mode, smooth scrolling, and Framer Motion animations.',
      image: portfolioImg,
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/niteesh032005',
      live: 'https://example.com'
    },
    {
      title: 'College Event Management System',
      description: 'A comprehensive dashboard for managing college events. Allows students to register for events and administrators to schedule and track participation.',
      image: eventsImg,
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/niteesh032005',
      live: 'https://example.com'
    },
    {
      title: 'Student Expense Tracker',
      description: 'A minimalist expense tracking application tailored for students. Helps track daily spending, set monthly budgets, and visualize financial habits via charts.',
      image: expensesImg,
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js'],
      github: 'https://github.com/niteesh032005',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of the practical digital solutions I have built."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-colors shadow-lg flex flex-col group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-main mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-surface text-primary rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-sm font-medium text-text-main hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} className="mr-1.5" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-sm font-medium text-text-main hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1.5" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
