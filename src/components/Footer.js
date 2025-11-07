import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Home, Users, Leaf, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-green-800 to-emerald-900 text-white py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Espacios Naturales</h3>
            </div>
            <p className="text-green-200 leading-relaxed">
              Descubre la magia de la naturaleza. Reserva tu aventura hoy y desconéctate del ajetreo.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-green-300 transition-colors">Inicio</a></li>
              <li><a href="#spaces" className="hover:text-green-300 transition-colors">Espacios</a></li>
              <li><a href="#contact" className="hover:text-green-300 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Soporte
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@espaciosnaturales.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-6 text-center text-sm text-green-200">
          <p>&copy; 2025 Espacios Naturales. Todos los derechos reservados. Diseñado con amor por la naturaleza.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;