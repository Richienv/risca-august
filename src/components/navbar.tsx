"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-xl font-bold text-white hover:text-pink-400 transition-colors duration-200">
              <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                Risca Agustine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
              Cara Kerja
            </Link>
            <Link href="#income-breakdown" className="text-white/80 hover:text-white transition-colors">
              Pendapatan
            </Link>
            <Link href="#pricing-section" className="text-white/80 hover:text-white transition-colors">
              Paket Join
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-pink-400 hover:to-rose-500 transition-all duration-300 hover:scale-105"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-pink-400 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              <Link
                href="#how-it-works"
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cara Kerja
              </Link>
              <Link
                href="#income-breakdown"
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pendapatan
              </Link>
              <Link
                href="#pricing-section"
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Paket Join
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg font-semibold hover:from-pink-400 hover:to-rose-500 transition-all duration-300 text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}