import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import developerImage from '../assets/developer.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-purple-200 text-xs md:text-sm font-medium mb-5 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            Available for freelance work
          </div>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-main mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              B.NITEESH KUMAR
            </span>
          </h1>
          <p className="text-xl text-text-main font-medium mb-4">
            Computer Science Engineering Student | Web Developer
          </p>
          <p className="text-text-muted text-lg mb-8 max-w-lg leading-relaxed">
            I am a Computer Science Engineering student passionate about web development, problem solving, and building practical digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
            <Button href="/resume.pdf" download="resume.pdf" variant="ghost">
              Download Resume
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-text-muted text-sm">Find me on:</span>
            <a href="https://github.com/niteesh032005" target="_blank" rel="noreferrer" className="p-2 bg-surface rounded-full text-text-main hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/niteesh-kumar-b-854b65290" target="_blank" rel="noreferrer" className="p-2 bg-surface rounded-full text-text-main hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md">
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <img src={developerImage} alt="Developer Illustration" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
