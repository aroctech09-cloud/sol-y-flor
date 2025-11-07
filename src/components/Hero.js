import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// 1. IMPORTA el video de tu carpeta /src/img
import videoSource from '../img/videoplayback.mp4';

const Hero = () => {
  const whatsappLink = `https://wa.me/1234567890?text=Hola%20🌞,%20me%20gustaría%20hacer%20una%20reservación%20en%20Sol%20y%20Flor.`;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* 2. USA la variable importada (videoSource) en el atributo src */}
        <source src={videoSource} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bienvenido a Sol y Flor
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          donde la naturaleza y el confort se encuentran.
        </motion.p>
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Reserva tu experiencia
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;