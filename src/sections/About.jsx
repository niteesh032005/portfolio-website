import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  const stats = [
    { value: '8.55', label: 'CGPA / 10' },
    { value: '2', label: 'INTERNSHIPS' },
    { value: '6', label: 'PROJECTS' },
    { value: '5', label: 'CERTIFICATIONS' }
  ];

  const languages = [
    { name: 'English', proficiency: 'Professional' },
    { name: 'Tamil', proficiency: 'Native' }
  ];

  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Who I Am + Stat Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <SectionHeading title="01 · About" subtitle="Who I Am" />

            <div className="text-text-muted space-y-6 leading-relaxed text-base md:text-lg">
              <p>
                I'm a final-year Computer Science Engineering student with a strong foundation in full stack development using the MERN stack — MongoDB, Express.js, React.js, and Node.js. Through academic projects, internships, and independent builds, I've developed hands-on experience designing responsive interfaces, building REST APIs, and working with databases end-to-end.
              </p>
              <p>
                I'm currently seeking freelance projects and entry-level full stack opportunities where I can apply what I've learned, take on real-world challenges, and continue growing as a developer.
              </p>
            </div>

            {/* Stat Cards 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-surface p-6 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-center"
                >
                  <span className="text-3xl md:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm font-bold tracking-wider uppercase text-text-muted mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact info & Languages panel inside About Section */}
          <motion.div 
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-surface/80 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-8"
          >
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase font-bold block mb-2">
                CONTACT
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-text-main">
                Get in touch
              </h3>
            </div>

            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-background rounded-xl text-primary shrink-0 border border-slate-800/80">
                  <Phone size={20} />
                </div>
                <a href="tel:8098343668" className="text-sm md:text-base font-semibold text-text-main hover:text-primary transition-colors">
                  +91 8098343668
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-background rounded-xl text-primary shrink-0 border border-slate-800/80">
                  <Mail size={20} />
                </div>
                <a href="mailto:niteesh1043@gmail.com" className="text-sm md:text-base font-semibold text-text-main hover:text-primary transition-colors break-all">
                  niteesh1043@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-background rounded-xl text-primary shrink-0 border border-slate-800/80">
                  <FaLinkedin size={20} />
                </div>
                <a href="https://linkedin.com/in/niteesh-kumar-b-854b65290" target="_blank" rel="noreferrer" className="text-sm md:text-base font-semibold text-text-main hover:text-primary transition-colors break-all">
                  linkedin.com/in/niteesh-kumar-b-854b65290
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-background rounded-xl text-primary shrink-0 border border-slate-800/80">
                  <FaGithub size={20} />
                </div>
                <a href="https://github.com/niteesh032005" target="_blank" rel="noreferrer" className="text-sm md:text-base font-semibold text-text-main hover:text-primary transition-colors break-all">
                  github.com/niteesh032005
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-background rounded-xl text-primary shrink-0 border border-slate-800/80">
                  <MapPin size={20} />
                </div>
                <span className="text-sm md:text-base font-semibold text-text-main">
                  Tamil Nadu, India
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                LANGUAGES
              </span>
              <div className="flex flex-wrap gap-2.5">
                {languages.map((lang, index) => (
                  <span 
                    key={index}
                    className="px-3.5 py-2 bg-background/80 border border-slate-700/80 rounded-xl text-xs md:text-sm font-medium text-text-main shadow-sm"
                  >
                    <span className="font-bold">{lang.name}</span> · <span className="text-text-muted">{lang.proficiency}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
