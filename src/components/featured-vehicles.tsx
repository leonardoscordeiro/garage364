"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Gauge, Calendar, Fuel, ArrowUpRight } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  mileage: string;
  transmission: string;
  fuel: string;
  hp: string;
  price: string;
  image: string;
  badge?: string;
}

const vehicles: Vehicle[] = [
  {
    id: "bmw-m340i",
    name: "BMW M340i xDrive",
    subtitle: "3.0 Turbo 6 Cilindros",
    year: "2021",
    mileage: "24.000 km",
    transmission: "Automático 8v",
    fuel: "Gasolina",
    hp: "387 cv",
    price: "R$ 289.900",
    badge: "DESTAQUE",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "audi-rs5",
    name: "AUDI RS5 Sportback",
    subtitle: "2.9 V6 Biturbo",
    year: "2020",
    mileage: "31.000 km",
    transmission: "Tiptronic 8v",
    fuel: "Gasolina",
    hp: "450 cv",
    price: "R$ 329.900",
    badge: "REVISADO",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "porsche-911",
    name: "PORSCHE 911 Carrera",
    subtitle: "3.0 Boxer 6 Biturbo",
    year: "2022",
    mileage: "15.000 km",
    transmission: "PDK 8v",
    fuel: "Gasolina",
    hp: "385 cv",
    price: "R$ 659.900",
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "mercedes-c63",
    name: "MERCEDES-AMG C63 S",
    subtitle: "4.0 V8 Biturbo",
    year: "2021",
    mileage: "18.500 km",
    transmission: "AMG Speedshift 9v",
    fuel: "Gasolina",
    hp: "510 cv",
    price: "R$ 549.900",
    badge: "EXCLUSIVO",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedVehicles() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % (vehicles.length - visibleCount + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section id="veiculos" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-[#181818]">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E31E24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-[#E31E24] text-xs font-bold tracking-widest uppercase font-display block">
              VEÍCULOS EM DESTAQUE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold italic uppercase text-white font-display">
              Escolhidos com <span className="text-[#E31E24]">excelência</span>
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              Veículos selecionados, revisados e prontos para entregar a melhor experiência automotiva.
            </p>
          </motion.div>

          {/* Navigation Controls (Left/Right Box Buttons like reference visual) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              disabled={startIndex === 0}
              aria-label="Veículo Anterior"
              className={`w-12 h-12 rounded-sm border flex items-center justify-center transition-all duration-200 ${
                startIndex === 0
                  ? "bg-[#121212] border-[#222222] text-zinc-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#2A2A2A] text-zinc-300 hover:bg-[#E31E24] hover:border-[#E31E24] hover:text-white"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              disabled={startIndex >= vehicles.length - visibleCount}
              aria-label="Próximo Veículo"
              className={`w-12 h-12 rounded-sm border flex items-center justify-center transition-all duration-200 ${
                startIndex >= vehicles.length - visibleCount
                  ? "bg-[#121212] border-[#222222] text-zinc-600 cursor-not-allowed"
                  : "bg-[#E31E24] border-[#E31E24] text-white shadow-lg shadow-[#E31E24]/30 hover:bg-[#C6151B]"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Vehicles Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.slice(startIndex, startIndex + visibleCount).map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-[#121212] border border-[#222222] hover:border-[#E31E24]/50 rounded-md overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30 pointer-events-none" />

                  {/* Badge */}
                  {car.badge && (
                    <div className="absolute top-3 left-3 bg-[#E31E24] text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded-sm uppercase font-display shadow-md">
                      {car.badge}
                    </div>
                  )}

                  {/* Quick specs pill on top right */}
                  <div className="absolute top-3 right-3 bg-[#0B0B0B]/80 backdrop-blur-md border border-[#2B2B2B] text-zinc-300 text-[11px] font-bold px-2.5 py-1 rounded-sm flex items-center gap-1.5">
                    <Gauge className="w-3 h-3 text-[#E31E24]" />
                    {car.hp}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-extrabold italic uppercase text-white font-display group-hover:text-[#E31E24] transition-colors duration-200">
                      {car.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium">
                      {car.subtitle}
                    </p>
                  </div>

                  {/* Specs List */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#1F1F1F] text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{car.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase block">
                    VALOR DE INVESTIMENTO
                  </span>
                  <span className="text-xl font-extrabold text-[#E31E24] font-display">
                    {car.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20${encodeURIComponent(car.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-[#1A1A1A] hover:bg-[#E31E24] text-white border border-[#2B2B2B] hover:border-[#E31E24] flex items-center justify-center transition-all duration-300 group/btn"
                  aria-label={`Tenho interesse no ${car.name}`}
                >
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
