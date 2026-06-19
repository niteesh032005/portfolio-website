import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Open to internships, collaborations, and freelance opportunities."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-surface rounded-full text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-main mb-1">Email</h4>
                <a href="mailto:vallibala1043@gmail.com" className="text-text-muted hover:text-primary transition-colors">
                  vallibala1043@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-surface rounded-full text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-main mb-1">Location</h4>
                <p className="text-text-muted">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-surface rounded-full text-primary shrink-0">
                <FaGithub size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-main mb-1">GitHub</h4>
                <a href="https://github.com/niteesh032005" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  github.com/niteesh032005
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-surface rounded-full text-primary shrink-0">
                <FaLinkedin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-main mb-1">LinkedIn</h4>
                <a href="https://linkedin.com/in/niteesh-kumar-b-854b65290" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  linkedin.com/in/niteesh-kumar-b-854b65290
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface p-8 rounded-2xl border border-slate-800 shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background border border-slate-700 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-slate-700 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-background border border-slate-700 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full" variant="primary">
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
