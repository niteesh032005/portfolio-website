import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Button = ({ children, variant = 'primary', className, href, onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-lg px-6 py-3 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-text-muted hover:text-text-main hover:bg-surface"
  };

  const classes = clsx(baseStyles, variants[variant], className);

  if (href?.startsWith('#')) {
    return (
      <Link to={href.substring(1)} smooth={true} duration={500} offset={-80} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') && !props.download ? "_blank" : undefined} rel={href.startsWith('http') && !props.download ? "noreferrer" : undefined} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes} 
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
