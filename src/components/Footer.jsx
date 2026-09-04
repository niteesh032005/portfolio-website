import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-surface py-12 mt-20 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-primary tracking-tighter">
            B.NITEESH
          </Link>
          <p className="text-text-muted mt-2 text-sm max-w-xs">
            Building practical digital solutions and bringing ideas to life on the web.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/niteesh032005" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/niteesh-kumar-b-854b65290" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:niteesh1043@gmail.com" className="text-text-muted hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} B.NITEESH KUMAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
