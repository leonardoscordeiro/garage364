"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1A1A1A] text-zinc-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#home" className="flex items-center gap-1">
              <span className="font-extrabold text-2xl sm:text-3xl tracking-wider text-white italic font-display">
                Garage
              </span>
              <span className="font-extrabold text-2xl sm:text-3xl tracking-wider text-[#E31E24] italic font-display ml-1">
                364
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Paixão por mover você. Oficina especializada em mecânica de alta performance, revisão preventiva e estética de veículos esportivos em Porto Alegre - RS.
            </p>

            <div className="text-xs text-zinc-500 font-mono pt-1">
              CNPJ: 60.914.760/0001-36
            </div>

            <div className="flex items-center space-x-3 pt-2">
              {/* Google Maps Link */}
              <a
                href="https://share.google/yezBpCPbD3n90KoH5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Garage 364"
                className="w-10 h-10 rounded-sm bg-[#121212] border border-[#222222] hover:border-[#E31E24] hover:text-[#E31E24] flex items-center justify-center transition-colors text-zinc-400"
              >
                <MapPin className="w-4 h-4" />
              </a>

              {/* Instagram Official Link */}
              <a
                href="https://www.instagram.com/garage364/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @garage364"
                className="w-10 h-10 rounded-sm bg-[#121212] border border-[#222222] hover:border-[#E31E24] hover:text-[#E31E24] flex items-center justify-center transition-colors text-zinc-400"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/5551999505703"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Garage 364"
                className="w-10 h-10 rounded-sm bg-[#121212] border border-[#222222] hover:border-[#E31E24] hover:text-[#E31E24] flex items-center justify-center transition-colors text-zinc-400"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase font-display border-b border-[#222222] pb-2">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase font-display border-b border-[#222222] pb-2">
              SERVIÇOS
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Mecânica Especializada
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  High Performance & Tuning
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Revisão Preventiva Premium
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Personalização & Aerodinâmica
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Diagnóstico Avançado Computadorizado
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase font-display border-b border-[#222222] pb-2">
              LOCALIZAÇÃO & CONTATO
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                <a
                  href="https://share.google/yezBpCPbD3n90KoH5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>R. Livramento, 364 - Santana, Porto Alegre - RS, 90640-130</span>
                  <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E31E24] shrink-0" />
                <a href="tel:5551999505703" className="hover:text-white transition-colors">
                  (51) 99950-5703
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Segunda a Sexta • 07:00 às 18:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-[#161616] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Garage 364. Todos os direitos reservados. CNPJ: 60.914.760/0001-36
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <div className="w-7 h-7 rounded-sm bg-[#121212] border border-[#222222] flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 text-[#E31E24]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
