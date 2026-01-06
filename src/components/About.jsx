import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div className="md:w-3/4 mx-auto text-center md:text-left">
            <h2 className="flex items-center justify-center md:justify-start text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="text-primary font-mono mr-2">01.</span> About Me
              <span className="ml-4 h-px bg-gray-200 dark:bg-gray-700 flex-grow max-w-xs"></span>
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-4 text-lg leading-relaxed">
              <p>
                Hello! My name is Saiki and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was exciting!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.
              </p>
              <p>
                Here are some of the projects I can offer as a freelancer:
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4 max-w-lg mx-auto md:mx-0">
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span> E-commerce Platforms</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span> SaaS Dashboards</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span> Portfolio Websites</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span> Booking Platforms</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span> Landing Pages</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span> Communication Platform</li>
                 <li className="flex items-center"><span className="text-primary mr-2">▹</span> Real Estate Platforms</li>
                 <li className="flex items-center italic text-gray-500"><span className="text-primary mr-2">▹</span> And much more...</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
