"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background video placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-black via-blue-900/50 to-black">
          {/* Video placeholder - in a real app, this would be a video element */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white/20">
              <h2 className="text-6xl md:text-8xl font-bold opacity-50">
                Voyage Temporel
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Découvrez les merveilles du temps
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            TimeTravel Agency vous emmène dans des voyages uniques à travers les époques.
            Explorez Paris 1889, le Crétacé ou Florence 1504 comme jamais auparavant.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="#destinations"
              className="inline-block bg-gold-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              Explorer les destinations
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white"
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}