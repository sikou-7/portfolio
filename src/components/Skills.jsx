import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaGithub, FaBootstrap, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs, SiExpress, SiFlutter, SiPostgresql, SiDjango } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-black dark:text-white" /> },
  { name: 'React Native', icon: <FaReact size={40} className="text-[#61DAFB]" /> },
  { name: 'Flutter', icon: <SiFlutter size={40} className="text-[#02569B]" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#F7DF1E]" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
  { name: 'Python', icon: <FaPython size={40} className="text-[#3776AB]" /> },
  { name: 'Django', icon: <SiDjango size={40} className="text-[#092E20]" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#339933]" /> },
  { name: 'Express', icon: <SiExpress size={40} className="text-black dark:text-white" /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-[#7952B3]" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
  { name: 'Git', icon: <FaGitAlt size={40} className="text-[#F05032]" /> },
  { name: 'GitHub', icon: <FaGithub size={40} className="text-black dark:text-white" /> },
  { name: 'AWS', icon: <FaAws size={40} className="text-[#FF9900]" /> },
  { name: 'Docker', icon: <FaDocker size={40} className="text-[#2496ED]" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-[#47A248]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-[#336791]" /> },
  { name: 'SQL', icon: <FaDatabase size={40} className="text-gray-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#112240] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
        >
          <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12">
            <span className="text-primary font-mono mr-2">02.</span> Skills
            <span className="ml-4 h-px bg-gray-200 dark:bg-gray-700 flex-grow max-w-xs"></span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-4"
              >
                {skill.icon}
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
