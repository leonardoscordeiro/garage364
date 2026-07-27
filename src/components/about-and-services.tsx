"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Gauge,
  ShieldCheck,
  Sliders,
  Cpu,
  ChevronRight,
} from "lucide-react";

const servicesList = [
  {
    id: "mecanica",
    title: "MECÂNICA ESPECIALIZADA",
    icon: Wrench,
    description: "Manutenção de motores de alta performance, suspensão e sistemas de freio com ferramental específico de padrão oficial.",
  },
  {
    id: "performance",
    title: "PERFORMANCE",
    icon: Gauge,
    description: "Remap de ECU/TCU, intakeware, escapamentos esportivos e upgrade de turbinas para extração de potência máxima com segurança.",
  },
  {
    id: "revisao",
    title: "REVISÃO PREVENTIVA",
    icon: ShieldCheck,
    description: "Check-up rigoroso com mais de 100 itens inspecionados para garantir confiabilidade absoluta em pista ou nas ruas.",
  },
  {
    id: "personalizacao",
    title: "PERSONALIZAÇÃO",
    icon: Sliders,
    description: "Kits aerodinâmicos, instalação de acessórios premium e modificações visuais sob medida.",
  },
  {
    id: "diagnostico",
    title: "DIAGNÓSTICO AVANÇADO",
    icon: Cpu,
    description: "Scanners originais de última geração para varredura eletrônica completa de veículos alemães, europeus e esportivos.",
  },
];

export default function AboutAndServices() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="sobre" className="py-20 bg-[#0B0B0B] border-t border-[#181818] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left Column: Workshop Facade Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 relative flex"
          >
            <div className="relative w-full min-h-[350px] lg:min-h-full rounded-md overflow-hidden border border-[#222222] bg-[#111111] group shadow-xl">
              <Image
                src="/about-facade.jpg"
                alt="Fachada Garage 364"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/30 to-transparent pointer-events-none" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0B0B0B]/85 backdrop-blur-md border border-[#262626] rounded-sm">
                <div className="text-[#E31E24] text-xs font-bold tracking-widest uppercase mb-1">
                  ESTRUTURA MODERNA
                </div>
                <div className="text-white text-sm font-semibold">
                  Equipamentos de padrão internacional para superesportivos.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle Column: Sobre Nós */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="text-[#E31E24] text-xs font-bold tracking-widest uppercase font-display">
                SOBRE NÓS
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold italic uppercase text-white font-display leading-tight">
                Mais que uma garagem, <br />
                <span className="text-[#E31E24]">um estilo de vida.</span>
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed">
                A Garage 364 nasceu da paixão por carros e da busca incessante por excelência. Aqui, cada detalhe importa. Cuidamos do seu carro como se fosse nosso.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Contamos com uma equipe altamente qualificada e apaixonada pelo universo automotivo, pronta para entregar a melhor experiência e soluções sob medida.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="#contato"
                className="inline-block bg-[#141414] hover:bg-[#1A1A1A] text-white border border-[#262626] hover:border-[#E31E24]/60 text-xs font-bold tracking-wider px-6 py-3.5 rounded-sm transition-all duration-300 uppercase"
              >
                CONHEÇA NOSSA HISTÓRIA
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Nossos Serviços List */}
          <motion.div
            id="servicos"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-4"
          >
            <div>
              <span className="text-[#E31E24] text-xs font-bold tracking-widest uppercase font-display block mb-4">
                NOSSOS SERVIÇOS
              </span>

              {/* Services Rows */}
              <div className="space-y-3">
                {servicesList.map((service, idx) => {
                  const IconComp = service.icon;
                  const isActive = activeService === idx;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setActiveService(idx)}
                      className={`group cursor-pointer p-4 rounded-sm border transition-all duration-200 ${
                        isActive
                          ? "bg-[#161616] border-[#E31E24] shadow-md shadow-[#E31E24]/10"
                          : "bg-[#121212] border-[#222222] hover:bg-[#181818] hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconComp
                            className={`w-5 h-5 transition-colors ${
                              isActive ? "text-[#E31E24]" : "text-zinc-400 group-hover:text-[#E31E24]"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold tracking-wider font-display uppercase ${
                              isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                            }`}
                          >
                            {service.title}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isActive
                              ? "text-[#E31E24] translate-x-1"
                              : "text-zinc-500 group-hover:text-white group-hover:translate-x-1"
                          }`}
                        />
                      </div>

                      {/* Active Description snippet */}
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 text-xs text-zinc-400 pl-8 pt-2 border-t border-[#262626] leading-relaxed"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
