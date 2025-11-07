import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Users, Leaf } from 'lucide-react';

const CampfireIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Base de la fogata */}
    <rect x="9" y="18" width="6" height="4" rx="1" />
    {/* Troncos */}
    <path d="M12 14V8" />
    <path d="M10 12L8 10" />
    <path d="M14 12L16 10" />
    {/* Llamas */}
    <path d="M11 8L12 6L13 8Z" />
    <path d="M10 10L12 7L14 10Z" />
    <path d="M9 12L12 9L15 12Z" />
  </svg>
);

const spacesData = [
  {
    title: '🌿 Zona de camping libre',
    description: 'Espacio abierto para acampar bajo las estrellas, con baños ecológicos y áreas designadas.',
    images: ['https://example.com/camping1.jpg', 'https://example.com/camping2.jpg', 'https://example.com/camping3.jpg'],
    icon: Leaf,
  },
  {
    title: '🌸 Área de picnic familiar',
    description: 'Mesas sombreadas con parrillas para disfrutar comidas al aire libre en familia.',
    images: ['https://example.com/picnic1.jpg', 'https://example.com/picnic2.jpg'],
    icon: Users,
  },
  {
    title: '🔥 Espacio para fogatas nocturnas',
    description: 'Zonas circulares seguras para fogatas, perfectas para cuentos y marshmallows.',
    images: ['https://example.com/fogata1.jpg', 'https://example.com/fogata2.jpg', 'https://example.com/fogata3.jpg'],
    icon: CampfireIcon,
  },
];

const NaturalSpaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSpace, setActiveSpace] = useState(0);

  const currentSpace = spacesData[activeSpace];
  const currentImage = currentSpace.images[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentSpace.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + currentSpace.images.length) % currentSpace.images.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Espacios Naturales
        </motion.h2>
        <div className="space-y-12">
          {spacesData.map((space, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                <space.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-3xl font-semibold mb-4 text-gray-800">{space.title}</h3>
                <p className="text-gray-600 leading-relaxed">{space.description}</p>
                <div className="flex mt-6 space-x-4">
                  {space.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => {
                        setActiveSpace(index);
                        setCurrentIndex(imgIndex);
                      }}
                      className={`w-3 h-3 rounded-full ${activeSpace === index && imgIndex === currentIndex ? 'bg-green-600' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <motion.div
                className="md:w-1/2 relative"
                animate={{ opacity: activeSpace === index ? 1 : 0.5 }}
              >
                <img src={currentImage} alt={space.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                {activeSpace === index && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NaturalSpaces;