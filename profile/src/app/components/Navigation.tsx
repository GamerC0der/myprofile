"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 hidden sm:flex items-center justify-center space-x-4">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${pathname === "/" ? "bg-white text-black" : "border border-transparent hover:bg-white/30 hover:border-white/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"}`}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${pathname === "/projects" ? "bg-white text-black" : "border border-transparent hover:bg-white/30 hover:border-white/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"}`}
            >
              Projects
            </Link>
            <Link 
              href="/favorites" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${pathname === "/favorites" ? "bg-white text-black" : "border border-transparent hover:bg-white/30 hover:border-white/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"}`}
            >
              Favorites
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${pathname === "/about" ? "bg-white text-black" : "border border-transparent hover:bg-white/30 hover:border-white/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"}`}
            >
              About
            </Link>
          </div>

          <button 
            className="sm:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link 
            href="/contact"
            className="flex items-center space-x-2 bg-purple-600/80 border border-purple-500/50 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-purple-600 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            <span>Contact Me</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden py-4 space-y-2">
            <Link 
              href="/" 
              className={`block px-4 py-2 rounded-md transition-colors ${pathname === "/" ? "bg-white text-black" : "hover:bg-white/10"}`}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`block px-4 py-2 rounded-md transition-colors ${pathname === "/projects" ? "bg-white text-black" : "hover:bg-white/10"}`}
            >
              Projects
            </Link>
            <Link 
              href="/favorites" 
              className={`block px-4 py-2 rounded-md transition-colors ${pathname === "/favorites" ? "bg-white text-black" : "hover:bg-white/10"}`}
            >
              Favorites
            </Link>
            <Link 
              href="/about" 
              className={`block px-4 py-2 rounded-md transition-colors ${pathname === "/about" ? "bg-white text-black" : "hover:bg-white/10"}`}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}