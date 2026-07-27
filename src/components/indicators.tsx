"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Car, Trophy, ShieldCheck } from "lucide-react";

const indicators = [
  {
    icon: Wrench,
    stat: "+10 ANOS",
    label: "DE EXPERIÊNCIA",
  },
  {
    icon: Car,
    stat: "+3.5K",
    label: "CLIENTES ATENDIDOS",
  },
  {
    icon: Trophy,
    stat: "100%",
    label: "SATISFAÇÃO",
  },
  {
    icon: ShieldCheck,
    stat: "GARANTIA",
    label: "EM TODOS OS SERVIÇOS",
  },
];

export default function Indicators() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#121212] border border-[#222222] rounded-md shadow-2xl p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#222222]">
          {indicators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index !== 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                }`}
              >
                {/* Red Icon Box */}
                <div className="w-12 h-12 rounded-sm bg-[#E31E24]/10 border border-[#E31E24]/30 flex items-center justify-center shrink-0 group-hover:border-[#E31E24] transition-colors">
                  <IconComponent className="w-6 h-6 text-[#E31E24]" />
                </div>

                {/* Stat Text */}
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold tracking-wide text-white font-display">
                    {item.stat}
                  </div>
                  <div className="text-xs font-bold tracking-wider text-zinc-400 uppercase">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
