'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DevIDE',
    description: 'A real-time collaborative code editor enabling seamless live coding and multi-language execution.',
    image: '/images/projects/DevIDE.png',
    category: 'Development',
    technologies: ['React', 'Node.js', 'Socket.io', 'Monaco Editor'],
    github: 'https://github.com/amukta14/DevIDE'
  },
  {
    id: 2,
    title: 'F00D1E',
    description: 'A full-stack food delivery app designed for smooth browsing, ordering, and real-time order tracking.',
    image: '/images/projects/F00D1E.png',
    category: 'Full Stack',
    technologies: ['MERN Stack', 'Redux', 'Socket.io', 'Stripe'],
    github: 'https://github.com/amukta14/F00D1E'
  },
  {
    id: 3,
    title: 'TutorCove',
    description: 'A web platform connecting students and tutors, offering personalized learning experiences through curated sessions.',
    image: '/images/projects/TutorCove.png',
    category: 'Web Platform',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/amukta14/TutorCove'
  },
  {
    id: 4,
    title: 'Alphabet Game',
    description: 'A fast-paced speed typing game designed to improve your typing speed and accuracy with quick alphabet challenges.',
    image: '/images/projects/Alphabet-Game.png',
    category: 'Game Development',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
    github: 'https://github.com/amukta14/Alphabet-Game'
  },
  {
    id: 5,
    title: 'Student Management System',
    description: 'A MERN stack platform to manage student data with CRUD operations and a clean, intuitive dashboard.',
    image: '/images/projects/sms.png',
    category: 'Full Stack',
    technologies: ['MERN Stack', 'Redux', 'Material-UI', 'JWT'],
    github: 'https://github.com/amukta14/StudentManagementSystem'
  }
];

export default function Work() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Works</h1>
            <p className="text-xl text-gray-300">
              Check out my latest projects and contributions on GitHub
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm hover:bg-purple-800/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 