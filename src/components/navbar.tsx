"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "#home", active: true },
  { name: "SOBRE", href: "#sobre", active: false },
  { name: "SERVIÇOS", href: "#servicos", active: false },
  { name: "GALERIA", href: "#galeria", active: false },
  { name: "CONTATO", href: "#contato", active: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/90 backdrop-blur-md py-4 border-b border-[#1F1F1F] shadow-lg shadow-black/50"
          : "bg-gradient-to-b from-[#0B0B0B]/95 via-[#0B0B0B]/60 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-1 group">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-wider text-white italic font-display">
              Garage
            </span>
            <span className="font-extrabold text-2xl sm:text-3xl tracking-wider text-[#E31E24] italic font-display ml-1 group-hover:scale-105 transition-transform duration-200">
              364
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs lg:text-sm font-semibold tracking-wider transition-colors duration-200 py-1 ${
                  link.active
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                {link.active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E31E24]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Call to action button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5551999505703?text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20na%20Garage%20364"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E31E24] hover:bg-[#C6151B] text-white text-xs lg:text-sm font-bold tracking-wider px-6 py-2.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-[#E31E24]/30 hover:shadow-lg uppercase flex items-center gap-2"
            >
              FALE CONOSCO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111111] border-b border-[#222222] px-4 pt-4 pb-6 mt-3 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-wider py-2 px-3 rounded-md transition-colors ${
                    link.active
                      ? "bg-[#E31E24]/10 text-[#E31E24] border-l-2 border-[#E31E24]"
                      : "text-zinc-300 hover:bg-[#1A1A1A] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/5551999505703?text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20na%20Garage%20364"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#E31E24] hover:bg-[#C6151B] text-white text-sm font-bold tracking-wider py-3 rounded-sm text-center block uppercase flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> FALE CONOSCO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
