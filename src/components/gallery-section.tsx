"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Detalhamento e Proteção PPF",
    category: "ESTÉTICA AUTOMOTIVA",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Ajuste Fino de ECU em Dinamômetro",
    category: "PERFORMANCE & ENGINE TUNING",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Manutenção Preventiva de Freios Carbocerâmica",
    category: "SISTEMAS DE FREIO",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Setup de Suspensão de Corrida",
    category: "TRACK DAY PREP",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-24 bg-[#0B0B0B] border-t border-[#181818] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E31E24] text-xs font-bold tracking-widest uppercase font-display block"
          >
            GALERIA EXCLUSIVA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold italic uppercase text-white font-display"
          >
            Engenharia e <span className="text-[#E31E24]">paixão</span> em imagens
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base"
          >
            Conheça alguns dos projetos e serviços de alta complexidade executados na Garage 364 em Porto Alegre - RS.
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-md overflow-hidden bg-[#121212] border border-[#222222] hover:border-[#E31E24]/60 cursor-pointer shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Hover Details */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <div className="self-end">
                  <div className="w-8 h-8 rounded-sm bg-[#E31E24]/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-extrabold text-[#E31E24] tracking-widest uppercase font-display block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2"
              aria-label="Fechar galeria"
            >
              <X className="w-8 h-8" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#121212] border border-[#262626] rounded-md overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-[#0B0B0B] border-t border-[#222222] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#E31E24] tracking-widest uppercase font-display block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                </div>
                <a
                  href="https://wa.me/5551999505703?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20na%20Garage%20364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E31E24] hover:bg-[#C6151B] text-white text-xs font-bold px-5 py-2.5 rounded-sm uppercase tracking-wider"
                >
                  SOLICITAR ORÇAMENTO
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
