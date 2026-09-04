import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import eventsImg from '../assets/project_events.png';
import expensesImg from '../assets/project_expenses.png';
import mentoringImg from '../assets/project_mentoring.png';
import crmImg from '../assets/project_crm.png';
import shopsphereImg from '../assets/project_shopsphere.png';

const Projects = () => {
  const projects = [
    {
      title: 'Student Mentoring Portal',
      description: 'A comprehensive MERN-stack mentoring platform with student, faculty, and HOD role-based access control. Features automated mentor allocation, attendance tracking, and academic monitoring designed to reliably scale to 1,500+ student records.',
      image: mentoringImg,
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/niteesh032005',
      live: 'https://example.com'
    },
    {
      title: 'Client CRM System',
      description: 'A CRM dashboard for managing client relationships, tracking interactions, and organizing project pipelines — built to streamline freelance/business client management.',
      image: crmImg,
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/niteesh032005',
      live: 'https://example.com'
    },
    {
      title: 'ShopSphere — E-Commerce Website',
      description: 'A full-featured e-commerce platform with product browsing, cart, and checkout flow, built using the DummyJSON API for live product data.',
      image: shopsphereImg,
      tech: ['React', 'Tailwind CSS', 'DummyJSON API'],
      github: 'https://github.com/niteesh032005',
      live: 'https://example.com'
    },
    {
      title: 'College Event Management System',
      description: 'A high-capacity full-stack registration dashboard engineered for campus-wide scale. Streamlines event discovery, ticketing, and scheduling across departments, capable of handling 500+ concurrent student registrations without bottlenecking.',
      image: eventsImg,
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/niteesh032005',
      live: 'https://example.com'
    },
    {
      title: 'Student Expense Tracker',
      description: 'A dynamic financial analytics application tailored for student budgeting. Features custom Chart.js data visualizations and real-time budget alerts to proactively prevent overspending and analyze spending habits.',
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
          title="04 · Projects" 
          subtitle="What I've Built"
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

          {/* Upcoming Projects / View All Card inside Grid for exact 2-row symmetry */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-background rounded-2xl overflow-hidden border border-dashed border-slate-700 hover:border-primary transition-all duration-300 shadow-lg flex flex-col items-center justify-center text-center p-8 group relative min-h-[400px]"
          >
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-primary/30">
              <FaGithub size={32} />
            </div>
            <h3 className="text-2xl font-bold text-text-main mb-3">More Upcoming Projects...</h3>
            <p className="text-text-muted text-sm mb-8 max-w-xs leading-relaxed">
              I am continuously building new AI and Full-Stack applications. Explore my GitHub repository to view all my work and upcoming releases!
            </p>
            <a 
              href="https://github.com/niteesh032005" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-background font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              View Projects on GitHub <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
