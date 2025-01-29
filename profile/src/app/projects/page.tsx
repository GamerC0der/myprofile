"use client";

import Link from "next/link";
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black z-0" />
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-purple-900/20 to-transparent blur-3xl" />
      <Navigation />

      <main className="relative pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-black rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-400 mb-4">Description of your amazing project goes here. Highlight the key features and technologies used.</p>
                <Link
                  href={`/projects/${project}`}
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}