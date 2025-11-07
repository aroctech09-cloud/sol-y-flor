import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Cabins from './components/Cabins';
import NaturalSpaces from './components/NaturalSpaces';
import MapSection from './components/MapSection';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
    }, 300);
  };

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Cabins />
      <NaturalSpaces />
      <MapSection />
      <Reservations />
      <Footer />
    </div>
  );
};

export default App;