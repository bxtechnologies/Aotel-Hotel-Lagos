import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function About() {
  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-10">
          <motion.div 
            initial="hidden" animate="show" variants={{
              show: { transition: { staggerChildren: 0.15 } }
            }}
            className="order-2 lg:order-1"
          >
            <motion.p variants={textReveal} className="uppercase tracking-[0.2em] text-xs font-bold mb-4 text-secondary">
              Our Story
            </motion.p>
            <motion.h1 variants={textReveal} className="font-heading text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              A Legacy of <br/>Exceptional Service
            </motion.h1>
            <motion.div variants={textReveal} className="h-px w-24 bg-secondary mb-10"></motion.div>
            
            <motion.div variants={textReveal} className="space-y-8 text-primary/80 text-lg leading-relaxed font-light">
              <p>
                Nestled in the vibrant heart of Ikeja, Aotel Hotel Lagos Owodunni is a sanctuary of modern luxury and exceptional hospitality. We provide a refined retreat for both business and leisure travelers seeking comfort, convenience, and impeccable service.
              </p>
              <p>
                Our philosophy is simple: every guest deserves a premium, uncompromised experience. From our elegantly appointed rooms to our highly trained concierge staff, every detail is meticulously curated to ensure your stay exceeds expectations.
              </p>
              <p>
                Located just minutes away from major corporate hubs, high-end shopping districts, and cultural attractions, Aotel serves as the perfect base for your Lagos adventure. Experience the perfect blend of Nigerian warmth and international standards of hospitality.
              </p>
            </motion.div>
            
            <motion.div variants={textReveal} className="mt-14">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 font-bold transition-all uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-white text-xs group"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[3/4] relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?q=90&w=2560&auto=format&fit=crop" 
                alt="Hotel exterior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-surface z-0 hidden md:block border border-primary/5"></div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="absolute top-1/4 -right-12 w-3/5 aspect-square z-20 overflow-hidden shadow-2xl border-8 border-background hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=90&w=2560&auto=format&fit=crop" 
                alt="Dining experience" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
