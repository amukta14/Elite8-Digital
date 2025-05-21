'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

const experience = [
  {
    title: 'Software Development Engineer Intern',
    company: 'Bluestock Fintech India',
    location: 'Remote',
    duration: 'May 2025 - Present',
    logo: '/images/experience/bluestock.jpeg',
    responsibilities: [
      'Developing and maintaining web applications using React.js and Node.js',
      'Implementing responsive designs and ensuring cross-browser compatibility',
      'Collaborating with the team to deliver high-quality software solutions'
    ]
  }
];

const codingProfiles = [
  {
    name: 'CodeChef',
    icon: 'code',
    url: 'https://www.codechef.com/users/amukta14',
    username: 'amukta14',
    rating: '2★',
    image: '/images/profiles/codechef.jpeg'
  },
  {
    name: 'HackerRank',
    icon: 'code',
    url: 'https://www.hackerrank.com/profile/amukta140605',
    username: 'amukta140605',
    rating: '6★ (DSA), 4★ (Python)',
    image: '/images/profiles/hackerrank.png'
  },
  {
    name: 'LeetCode',
    icon: 'code',
    url: 'https://leetcode.com/u/amukta05/',
    username: 'amukta05',
    rating: '50+ Problems',
    image: '/images/profiles/leetcode.png'
  }
];

const skills = [
  { name: 'React', level: 90, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'TypeScript', level: 85, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', level: 80, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', level: 75, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'MongoDB', level: 70, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'C++', level: 85, logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' }
];

const techStack = {
  frontend: [
    { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'HTML5', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'Bootstrap', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg' }
  ],
  languages: [
    { name: 'C++', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
    { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'SQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' }
  ],
  backend: [
    { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' }
  ],
  tools: [
    { name: 'Git', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
    { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
    { name: 'NPM', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg' }
  ]
};

const hobbies = [
  {
    name: 'Poetry',
    icon: 'pen-fancy',
    description: 'Expressing emotions through words',
    image: '/images/hobbies/poetry.webp'
  },
  {
    name: 'Cooking',
    icon: 'utensils',
    description: 'Creating culinary masterpieces',
    image: '/images/hobbies/cooking.jpeg'
  },
  {
    name: 'Music',
    icon: 'music',
    description: 'Finding rhythm in every moment',
    image: '/images/hobbies/music.webp'
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/images/projects/hero-comp.jpeg"
                alt="Amukta Yajamanyam"
                fill
                className="rounded-full object-cover border-4 border-purple-500/20"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-300 mb-4">Full-Stack Developer & Problem Solver</p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm Amukta, a Computer Science student at CBIT, Hyderabad, passionate about MERN stack development and competitive programming. With strong DSA skills and a keen eye for web development, I actively contribute to open-source projects and participate in hackathons. I love building scalable applications and solving complex problems through innovative solutions.
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-gray-900 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {exp.logo && (
                        <div className="w-12 h-12 relative">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <h4 className="text-lg text-gray-300">{exp.company}</h4>
                      </div>
                    </div>
                    <span className="text-purple-400">{exp.duration}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.location}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Coding Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 relative mb-4">
                      <Image
                        src={profile.image}
                        alt={profile.name}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
                    <p className="text-gray-400 mb-1">@{profile.username}</p>
                    <p className="text-purple-400">{profile.rating}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Skills</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 relative mr-3">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {items.map((item) => (
                      <div key={item.name} className="flex flex-col items-center">
                        <div className="w-12 h-12 relative mb-2">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-gray-300">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-2xl font-bold mb-8">Beyond Code</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900 rounded-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={hobby.image}
                      alt={hobby.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`fas fa-${hobby.icon} text-2xl text-purple-400`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{hobby.name}</h3>
                    <p className="text-gray-400 text-center">{hobby.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 