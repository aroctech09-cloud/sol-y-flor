import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Users } from 'lucide-react';

const cabinsData = [
  {
    name: 'Cabaña Sol',
    price: '$150/noche',
    description: 'Cabaña acogedora para 2 personas con vista al bosque.',
    image: 'https://example.com/cabana1.jpg',
  },
  {
    name: 'Glamping Flor',
    price: '$200/noche',
    description: 'Tienda glamping lujosa para 4 personas con baño privado.',
    image: 'https://example.com/glamping1.jpg',
  },
  {
    name: 'Cabaña Estrella',
    price: '$180/noche',
    description: 'Espacio familiar con fogata privada para 6 personas.',
    image: 'https://example.com/cabana2.jpg',
  },
];

const Cabins = () => {
  const whatsappLink = (details) => `https://wa.me/1234567890?text=Hola%20🌞,%20quiero%20reservar%20${details}.`;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cabañas & Glamping
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cabinsData.map((cabin, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img src={cabin.image} alt={cabin.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{cabin.name}</h3>
                <p className="text-gray-600 mb-4">{cabin.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">{cabin.price}</span>
                  <div className="flex items-center text-gray-500">
                    <Bed className="w-4 h-4 mr-1" />
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <a
                  href={whatsappLink(`${cabin.name} ${cabin.price}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition duration-300"
                >
                  Reservar ahora
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cabins;