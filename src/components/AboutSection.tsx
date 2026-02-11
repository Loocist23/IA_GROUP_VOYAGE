"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">À propos de TimeTravel Agency</h2>

            <p className="text-lg text-white/90">
              Fondée en 2023, TimeTravel Agency est la première agence de voyage temporel
              au monde. Notre mission est de rendre les voyages dans le temps accessibles,
              sûrs et mémorables pour tous.
            </p>

            <p className="text-lg text-white/90">
              Grâce à notre technologie révolutionnaire de distorsion temporelle,
              nous vous offrons des expériences uniques à travers les époques, tout en
              garantissant votre sécurité et votre confort.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-gold-400">100%</div>
                <div className="text-sm text-white/80">Sécurité garantie</div>
              </div>

              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-gold-400">3+</div>
                <div className="text-sm text-white/80">Destinations temporelles</div>
              </div>

              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-gold-400">5★</div>
                <div className="text-sm text-white/80">Expérience client</div>
              </div>

              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-gold-400">24/7</div>
                <div className="text-sm text-white/80">Support disponible</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Voyage temporel"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}