"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black z-0" />
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-purple-900/20 to-transparent blur-3xl" />
      <Navigation />

      <main className="relative pt-16">
        <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent"
            >
              Matthew Foote
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-3xl mb-8 text-gray-300"
            >
              <span style={{ fontWeight: 500 }}>
                <Typewriter
                  words={['Programmer.', 'Gamer.', 'Builder.', 'Creator.']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>
            <div className="flex justify-center">
              <Link href="/about" className="group relative bg-purple-600/80 border border-purple-500/50 text-white font-medium py-3 px-8 rounded-full transition-all hover:bg-purple-600 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105">
                <span className="relative z-10">About Me</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl" />
          </div>

          {ripples.map(ripple => (
            <div
              key={ripple.id}
              className="absolute w-[500px] h-[500px] animate-ripple"
              style={{
                left: ripple.x - 250,
                top: ripple.y - 250,
                background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
              }}
            />
          ))}
        </div>


      </main>
    </div>
  );
}