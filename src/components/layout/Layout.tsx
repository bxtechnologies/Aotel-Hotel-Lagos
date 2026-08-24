import React from 'react';
import { useOutlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const location = useLocation();
  const element = useOutlet();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <AnimatePresence mode="wait" initial={true}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-grow flex flex-col"
        >
          {element}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
