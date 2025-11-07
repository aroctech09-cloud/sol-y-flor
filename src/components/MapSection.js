import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.123456789!2d-74.005941!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ1LjkiTiA3NMKwMDAnMjIuOSJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus';

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-100 to-yellow-100">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cómo Llegar
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A tan solo 15 minutos del ruido, y a segundos de la paz.
        </motion.p>
        <div className="relative mb-8">
          <iframe
            src={mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-2xl"
          ></iframe>
        </div>
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Sol+y+Flor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MapPin className="w-5 h-5 mr-2" />
          Abrir en Google Maps
        </motion.a>
      </div>
    </section>
  );
};

export default MapSection;