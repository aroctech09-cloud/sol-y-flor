import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logoImage from '../img/Logo.jpg'; 

const Loader = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return isVisible ? (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-300 via-orange-200 to-green-400 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/*
          Modificaciones aquí:
          - Aumenté el tamaño a w-56 h-56 para un logo más prominente.
          - Mantuve el rounded-full para la forma circular.
          - La imagen ahora usa object-cover y no tiene padding,
            para que llene completamente el círculo y se recorte si es necesario.
          - Si el logo.jpg tiene un fondo, este se convertirá en el fondo del círculo.
            Si es un PNG transparente, el degradado de este div será el fondo.
        */}
        <div className="w-56 h-56 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
          <img 
            src={logoImage} 
            alt="Logo de Sol y Flor" 
            className="w-full h-full object-cover" // object-cover para que llene el círculo y recorte si es necesario
          />
        </div>
        <h1 className="text-2xl font-bold text-white">Sol y Flor</h1>
        <p className="text-white/80">Cargando tu escape natural...</p>
      </motion.div>
    </motion.div>
  ) : null;
};

export default Loader;