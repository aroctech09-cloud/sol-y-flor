import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Send, Bed, ArrowUp, ArrowDown } from 'lucide-react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    type: '',
    people: '',
    nights: 1,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  // Precios base por tipo (por noche, en USD)
  const prices = {
    cabaña: 150,
    glamping: 200,
    camping: 100,
    picnic: 50, // No por noche, pero adaptado
    fogata: 30, // No por noche, pero adaptado
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Calcular total si hay tipo y noches
    if (name === 'type') {
      const pricePerNight = prices[value] || 0;
      setTotalPrice(formData.nights * pricePerNight);
    }
  };

  const handleNightsChange = (e) => {
    const nights = parseInt(e.target.value) || 1;
    setFormData({ ...formData, nights: nights });
    if (formData.type) {
      const pricePerNight = prices[formData.type] || 0;
      setTotalPrice(nights * pricePerNight);
    }
  };

  const incrementNights = () => {
    const newNights = Math.min(formData.nights + 1, 30);
    setFormData({ ...formData, nights: newNights });
    if (formData.type) {
      const pricePerNight = prices[formData.type] || 0;
      setTotalPrice(newNights * pricePerNight);
    }
  };

  const decrementNights = () => {
    const newNights = Math.max(formData.nights - 1, 1);
    setFormData({ ...formData, nights: newNights });
    if (formData.type) {
      const pricePerNight = prices[formData.type] || 0;
      setTotalPrice(newNights * pricePerNight);
    }
  };

  const handlePeopleChange = (e) => {
    const people = parseInt(e.target.value) || 1;
    setFormData({ ...formData, people: people });
  };

  const incrementPeople = () => {
    const newPeople = Math.min(parseInt(formData.people) + 1 || 1, 6);
    setFormData({ ...formData, people: newPeople });
  };

  const decrementPeople = () => {
    const newPeople = Math.max(parseInt(formData.people) - 1 || 1, 1);
    setFormData({ ...formData, people: newPeople });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const typeLabel = formData.type.charAt(0).toUpperCase() + formData.type.slice(1);
    const message = `Hola,%20soy%20${formData.name}.%20Quiero%20reservar%20una%20${typeLabel}%20el%20${formData.date}%20para%20${formData.people}%20personas%20por%20${formData.nights}%20noches.%20Total:%20$${totalPrice}`;
    const whatsappLink = `https://wa.me/8445349337?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const types = ['cabaña', 'glamping', 'camping', 'picnic', 'fogata'];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-100 to-green-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Haz tu Reservación
        </motion.h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>
          <motion.select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">Tipo de experiencia</option>
            {types.map((type) => (
              <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
            ))}
          </motion.select>
          <motion.div className="relative">
            <motion.input
              type="number"
              name="nights"
              value={formData.nights}
              onChange={handleNightsChange}
              min="1"
              max="30"
              className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center text-xl font-semibold"
              whileFocus={{ scale: 1.02 }}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col bg-white rounded-lg shadow-sm border">
              <button
                type="button"
                onClick={incrementNights}
                className="p-1 hover:bg-gray-100 rounded-t-lg transition-colors"
              >
                <ArrowUp className="w-4 h-4 text-gray-600" />
              </button>
              <button
                type="button"
                onClick={decrementNights}
                className="p-1 hover:bg-gray-100 rounded-b-lg transition-colors"
              >
                <ArrowDown className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <label className="absolute -top-6 left-0 text-xs text-gray-500 font-medium">Número de noches</label>
          </motion.div>
          <motion.div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              name="people"
              value={formData.people}
              onChange={handlePeopleChange}
              min="1"
              max="6"
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center text-xl font-semibold"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col bg-white rounded-lg shadow-sm border">
              <button
                type="button"
                onClick={incrementPeople}
                className="p-1 hover:bg-gray-100 rounded-t-lg transition-colors"
              >
                <ArrowUp className="w-4 h-4 text-gray-600" />
              </button>
              <button
                type="button"
                onClick={decrementPeople}
                className="p-1 hover:bg-gray-100 rounded-b-lg transition-colors"
              >
                <ArrowDown className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <label className="absolute -top-6 left-0 text-xs text-gray-500 font-medium">Número de personas (máx. 6)</label>
          </motion.div>
          {formData.type && (
            <motion.div
              className="bg-green-50 p-4 rounded-xl border border-green-200 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bed className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Precio total estimado:</span>
              </div>
              <p className="text-2xl font-bold text-green-600">${totalPrice}</p>
              <p className="text-sm text-green-700 mt-1">
                ({prices[formData.type]} por noche x {formData.nights} noches)
              </p>
            </motion.div>
          )}
          <motion.button
            type="submit"
            disabled={!formData.type || !formData.date || !formData.people || !formData.name}
            className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5" />
            Enviar a WhatsApp
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Reservations;