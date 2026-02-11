"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gold-400">
          TimeTravel
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="#destinations" className="hover:text-gold-400 transition-colors">
            Destinations
          </Link>
          <Link href="#about" className="hover:text-gold-400 transition-colors">
            À propos
          </Link>
          <Link href="#contact" className="hover:text-gold-400 transition-colors">
            Contact
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm absolute top-full left-0 right-0">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#destinations" className="hover:text-gold-400 transition-colors">
              Destinations
            </Link>
            <Link href="#about" className="hover:text-gold-400 transition-colors">
              À propos
            </Link>
            <Link href="#contact" className="hover:text-gold-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}