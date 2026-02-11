"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    title: "Paris 1889 - Belle Époque",
    description: "Découvrez la Ville Lumière à son apogée avec l'Exposition Universelle et la Tour Eiffel flambant neuve.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "2999€",
    duration: "7 jours",
  },
  {
    id: 2,
    title: "Crétacé - L'ère des dinosaures",
    description: "Voyagez 65 millions d'années en arrière pour observer les créatures préhistoriques dans leur habitat naturel.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "4999€",
    duration: "5 jours",
  },
  {
    id: 3,
    title: "Florence 1504 - Renaissance",
    description: "Plongez dans le berceau de la Renaissance italienne et rencontrez les grands maîtres de l'art.",
    image: "https://images.unsplash.com/photo-1533358345555-097b9c85b662?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "3499€",
    duration: "6 jours",
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Destinations Temporelles</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choisissez parmi nos expériences temporelles exclusives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-white/5 border-white/10 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {destination.title}
                    </h3>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white">{destination.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-white/90 mb-4">{destination.description}</p>

                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <p className="text-sm text-white/60">Durée</p>
                      <p className="text-lg font-semibold text-white">
                        {destination.duration}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-white/60">À partir de</p>
                      <p className="text-lg font-semibold text-gold-400">
                        {destination.price}
                      </p>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gold-500 text-black py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors">
                    Réserver maintenant
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}