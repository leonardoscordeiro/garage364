"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Calendar, MapPin, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contato" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-[#181818]">
      {/* Red Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E31E24]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-r from-[#141414] via-[#161616] to-[#121212] border border-[#282828] hover:border-[#E31E24]/40 rounded-md p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden"
        >
          {/* Top Red Accent Strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E31E24] via-red-600 to-[#E31E24]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Text */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E31E24]/10 border border-[#E31E24]/30 rounded-sm text-[#E31E24] text-xs font-bold tracking-widest uppercase font-display">
                <ShieldCheck className="w-4 h-4" />
                ATENDIMENTO EXCLUSIVO • PORTO ALEGRE - RS
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold italic uppercase text-white font-display leading-tight">
                Seu veículo merece o <br className="hidden sm:block" />
                <span className="text-[#E31E24]">melhor tratamento.</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Entre em contato com a equipe da Garage 364 para agendamentos de revisão preventiva, serviços de alta performance ou consultoria automotiva em Porto Alegre.
              </p>

              {/* Location & Hours Badge */}
              <div className="space-y-2 pt-2 text-xs font-semibold text-zinc-300">
                <a
                  href="https://share.google/yezBpCPbD3n90KoH5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#E31E24] transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-[#E31E24] shrink-0" />
                  <span>R. Livramento, 364 - Santana, Porto Alegre - RS, 90640-130</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>

                <div className="flex items-center gap-2 text-zinc-400">
                  <Calendar className="w-4 h-4 text-[#E31E24] shrink-0" />
                  <span>Segunda a Sexta • 07:00 às 18:00</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="https://wa.me/5551999505703?text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20na%20Garage%20364"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E31E24] hover:bg-[#C6151B] text-white text-sm font-bold tracking-wider py-4 px-6 rounded-sm text-center transition-all duration-300 uppercase shadow-lg shadow-[#E31E24]/25 hover:shadow-[#E31E24]/40 flex items-center justify-center gap-3 group"
              >
                <PhoneCall className="w-4 h-4" />
                AGENDAR PELO WHATSAPP
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:5551999505703"
                className="w-full bg-[#1A1A1A] hover:bg-[#222222] text-white border border-[#2B2B2B] hover:border-zinc-500 text-sm font-bold tracking-wider py-4 px-6 rounded-sm text-center transition-all duration-300 uppercase flex items-center justify-center gap-2"
              >
                (51) 99950-5703
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
