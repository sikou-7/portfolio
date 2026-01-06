import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  useEffect(() => {
    let interval;
    const shuffle = () => {
      let iteration = 0;
      clearInterval(interval);
      
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 2;
      }, 25);
    };

    const loop = setInterval(() => {
      shuffle();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(loop);
    };
  }, [text]);

  return <span className="font-mono">{displayText}</span>;
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gray-50 dark:bg-dark transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-primary font-mono text-lg mb-4"
          >
            <GlitchText text="Hi, my name is" />
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Saiki Abd Samed.<span className="animate-cursor text-primary">|</span>
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-500 dark:text-gray-400 mb-6"
          >
            Building high-performance digital solutions.
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 text-lg mb-8 leading-relaxed"
          >
            I help businesses grow by crafting scalable, user-centric web applications. Specializing in modern tech stacks to deliver results that matter.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-block border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-md font-mono transition-colors duration-300"
            >
              Check out my work!
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full h-full relative z-10"
            >
             <div className="w-full h-full rounded-full border-4 border-primary/30 p-2 relative overflow-hidden shadow-2xl shadow-primary/20">
                <img 
                  src="/src/assets/profile.jpg" 
                  alt="Developer Profile"
                  className="w-full h-full object-cover rounded-full"
                />
             </div>
             {/* Wave/Pulse Effect Wrapper */}
             <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
