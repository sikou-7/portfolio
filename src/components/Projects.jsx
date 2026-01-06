import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const projects = [
  {
    title: 'Luxury Real Estate Platform',
    description: 'A premium property listing platform featuring virtual tours, advanced filtering, and instant booking capabilities. Built for high-end real estate agencies.',
    tags: ['Next.js', 'PostgreSQL', 'AWS S3', 'Stripe'],
    links: { github: '#', external: '#' },
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'A comprehensive data visualization dashboard for a SaaS product. Features real-time user metrics, revenue tracking, and exportable reports.',
    tags: ['React', 'D3.js', 'Node.js', 'Firebase'],
    links: { github: '#', external: '#' },
  },
  {
    title: 'E-Commerce Fashion Store',
    description: 'A high-conversion online store with a custom design system, seamless cart experience, and integrated payment gateways. Optimized for mobile and SEO.',
    tags: ['Shopify Headless', 'Next.js', 'Tailwind CSS', 'Redux'],
    links: { github: '#', external: '#' },
  },
  {
    title: 'Corporate Booking System',
    description: 'An internal tool for a large corporation to manage meeting room bookings and resource allocation across multiple offices. Features calendar sync and admin controls.',
    tags: ['Vue.js', 'Laravel', 'Docker', 'MySQL'],
    links: { github: '#', external: '#' },
  },
  {
    title: 'Secure Communication App',
    description: 'A real-time messaging application focused on privacy and security. Includes end-to-end encryption, file sharing, and voice calls.',
    tags: ['React Native', 'Socket.io', 'WebRTC', 'Redis'],
    links: { github: '#', external: '#' },
  },
  {
    title: 'Medical Appointment Portal',
    description: 'A patient portal allowing easy appointment scheduling, prescription management, and telemedicine video consultations.',
    tags: ['Next.js', 'Twilio', 'PostgreSQL', 'HIPAA Compliant'],
    links: { github: '#', external: '#' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
        >
          <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12">
            <span className="text-primary font-mono mr-2">03.</span> Projects
            <span className="ml-4 h-px bg-gray-200 dark:bg-gray-700 flex-grow max-w-xs"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-[#112240] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex justify-between items-center mb-6">
                  <FaFolder size={40} className="text-primary" />
                  <div className="flex gap-4">
                    <a href={project.links.github} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" aria-label="GitHub">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.links.external} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" aria-label="External Link">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-3 font-mono text-xs text-gray-500 dark:text-gray-500 mt-auto">
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
