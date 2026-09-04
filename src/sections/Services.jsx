import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { MonitorSmartphone, Layers, LayoutDashboard, Network } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Responsive Websites',
      description: 'Fast, mobile-friendly sites built with React and Tailwind CSS',
      icon: <MonitorSmartphone size={26} />
    },
    {
      title: 'Full-Stack Web Apps',
      description: 'End-to-end apps using React, Node.js, Express, and MongoDB',
      icon: <Layers size={26} />
    },
    {
      title: 'Dashboard & Admin Panels',
      description: 'Role-based systems with data visualization',
      icon: <LayoutDashboard size={26} />
    },
    {
      title: 'API Integration',
      description: 'Connecting frontend apps to REST APIs and third-party services',
      icon: <Network size={26} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface/15">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="What I Can Build For You" 
          subtitle="Practical solutions tailored to your needs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-surface border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 cursor-default shadow-lg hover:shadow-primary/10"
            >
              <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-primary mb-5 shadow-inner border border-slate-800/80">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-text-main mb-2">{service.title}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
