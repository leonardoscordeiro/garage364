import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Garage 364 | Performance, Qualidade e Confiança",
  description: "Garage 364 - Paixão por mover você. Mecânica especializada, alta performance, revisão preventiva, personalização e veículos premium.",
  keywords: ["Garage 364", "Mecânica de Luxo", "Carros Esportivos", "Alta Performance", "Revisão Preventiva", "Veículos Premium"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="bg-[#0B0B0B] text-white antialiased font-sans selection:bg-[#E31E24] selection:text-white">
        {children}
      </body>
    </html>
  );
}
