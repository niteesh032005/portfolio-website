import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, number, variant }) => {
  const formattedTitle = number && typeof title === 'string' && !title.includes('·')
    ? `${number} · ${title}`
    : title;

  const isTwoLine = variant === 'two-line' || (typeof formattedTitle === 'string' && formattedTitle.includes('·')) || Boolean(number);

  if (isTwoLine) {
    return (
      <div className="mb-12 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5 mb-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {formattedTitle}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl font-medium text-text-muted">
              {subtitle}
            </p>
          )}
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-primary mt-4 mx-auto md:mx-0 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="mb-12 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4"
      >
        {number && (
          <span className="text-primary font-mono text-xl md:text-2xl font-bold">
            {number}.
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-text-main">
          {title}
        </h2>
      </motion.div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-muted text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 bg-primary mt-4 mx-auto md:mx-0 rounded-full"
      />
    </div>
  );
};

export default SectionHeading;
