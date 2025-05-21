'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/amukta14',
    username: '@amukta14'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/amukta-yajamanyam-1287a6275/',
    username: '@amukta-yajamanyam'
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: 'https://x.com/amukta05',
    username: '@amukta05'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/amukta05/',
    username: '@amukta05'
  }
];

export default function Contact() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Let's connect and discuss opportunities
            </p>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Resume</h2>
            <motion.a
              href="https://drive.google.com/drive/folders/1EUDvdSbW403TxgC-ppX-P6aGYA_Ka2Cq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                <i className="fas fa-file-pdf text-2xl text-purple-400" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-1">Download Resume</h3>
                <p className="text-gray-400">View my latest resume on Google Drive</p>
              </div>
              <i className="fas fa-external-link-alt text-gray-400 ml-auto" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Social Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                      <i className={`fab fa-${social.icon} text-2xl text-purple-400`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{social.name}</h3>
                      <p className="text-gray-400">{social.username}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 