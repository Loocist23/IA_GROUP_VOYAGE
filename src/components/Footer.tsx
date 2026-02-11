import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gold-400">TimeTravel</h3>
            <p className="text-white/80 text-sm">
              L'agence de voyage temporel qui rend l'histoire accessible.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Destinations</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <Link href="#destinations" className="hover:text-gold-400 transition-colors">
                  Paris 1889
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-gold-400 transition-colors">
                  Crétacé
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-gold-400 transition-colors">
                  Florence 1504
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <Link href="#about" className="hover:text-gold-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold-400 transition-colors">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <address className="text-white/80 text-sm not-italic">
              <p>1 Rue du Temps</p>
              <p>75001 Paris, France</p>
              <p className="mt-2">
                <a href="tel:+33123456789" className="hover:text-gold-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </p>
              <p>
                <a href="mailto:contact@timetravel.com" className="hover:text-gold-400 transition-colors">
                  contact@timetravel.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TimeTravel Agency. Tous droits réservés.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}