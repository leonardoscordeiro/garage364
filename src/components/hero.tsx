"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center overflow-hidden bg-[#0B0B0B]">
      
      {/* Full-Screen Background Video in Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-85 scale-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Overlay Gradients for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-[#0B0B0B]/10 to-[#0B0B0B]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/60 via-[#0B0B0B]/15 to-transparent" />
      </div>

      {/* Red Ambient Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E31E24]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-8"
        >
          {/* Red Accent Dash */}
          <div className="w-16 h-1 bg-[#E31E24]" />

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold italic uppercase tracking-tight text-white font-display leading-[0.92] drop-shadow-2xl">
            PAIXÃO POR <br />
            MOVER <span className="text-[#E31E24]">VOCÊ.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-200 text-lg sm:text-xl max-w-xl leading-relaxed font-normal drop-shadow-md">
            Performance, qualidade e confiança em cada detalhe. Seu carro, nosso compromisso.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <Link
              href="#servicos"
              className="bg-[#E31E24] hover:bg-[#C6151B] text-white text-sm font-bold tracking-wider px-9 py-4 rounded-sm transition-all duration-300 shadow-xl shadow-[#E31E24]/30 hover:shadow-[#E31E24]/50 uppercase flex items-center gap-2.5 group"
            >
              <Wrench className="w-4 h-4" />
              NOSSOS SERVIÇOS
            </Link>

            <a
              href="https://wa.me/5551999505703?text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20na%20Garage%20364"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414]/80 backdrop-blur-md hover:bg-[#1A1A1A] text-white border border-[#2B2B2B] hover:border-[#E31E24] text-sm font-bold tracking-wider px-9 py-4 rounded-sm transition-all duration-300 uppercase flex items-center gap-2.5 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-[#E31E24]" />
              AGENDE SEU SERVIÇO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
