import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { number: '01', name: 'About', to: 'about' },
  { number: '02', name: 'Skills', to: 'skills' },
  { number: '03', name: 'Experience', to: 'experience' },
  { number: '04', name: 'Projects', to: 'projects' },
  { number: '05', name: 'Education', to: 'education' },
  { number: '06', name: 'Certifications', to: 'certifications' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg shadow-black/10 py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-primary tracking-tighter">
          B.NITEESH
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-base font-medium text-text-muted hover:text-primary transition-all cursor-pointer flex items-center gap-2 py-2 px-3 lg:px-3.5 rounded-xl hover:bg-surface/60"
              activeClass="text-primary font-semibold bg-surface/40 shadow-sm"
              spy={true}
            >
              <span className="text-sm font-mono text-primary/90">{link.number}.</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-main p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-slate-700/50 shadow-xl">
          <nav className="flex flex-col py-4 px-6 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-lg font-medium text-text-main hover:text-primary transition-all flex items-center gap-3 cursor-pointer py-2.5 px-4 rounded-xl hover:bg-slate-800/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-sm font-mono text-primary font-bold">{link.number}.</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
