import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Resume Snapshot" 
          subtitle="A quick overview of my academic and technical journey."
        />

        <div className="mt-12 bg-surface p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-6 border-b border-slate-800 pb-4">Education</h3>
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-primary">B.Tech in Computer Science Engineering</h4>
                <p className="text-text-main mt-1">ABC College of Engineering</p>
                <p className="text-sm text-text-muted mt-1">2022 - 2026</p>
              </div>
              
              <h3 className="text-2xl font-bold text-text-main mb-6 border-b border-slate-800 pb-4">Core Competencies</h3>
              <ul className="list-disc list-inside text-text-muted space-y-2">
                <li>Frontend Web Development</li>
                <li>Responsive UI/UX Design</li>
                <li>Problem Solving & Algorithms</li>
                <li>Database Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-6 border-b border-slate-800 pb-4">Key Projects</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="text-md font-semibold text-text-main">Event Management System</h4>
                  <p className="text-sm text-text-muted">MERN stack dashboard for college events.</p>
                </li>
                <li>
                  <h4 className="text-md font-semibold text-text-main">Student Expense Tracker</h4>
                  <p className="text-sm text-text-muted">JavaScript-based budgeting tool with Chart.js.</p>
                </li>
              </ul>

              <div className="mt-12 text-center md:text-left">
                <Button href="/resume.pdf" download="resume.pdf" variant="primary" className="w-full md:w-auto">
                  <Download size={18} className="mr-2" /> Download Full Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
