import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export function Location() {
  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial="hidden" animate="show" variants={{
              show: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.p variants={textReveal} className="uppercase tracking-[0.2em] text-xs font-bold mb-4 text-secondary">
              Find Us
            </motion.p>
            <motion.h1 variants={textReveal} className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">Our Location</motion.h1>
            <motion.div variants={textReveal} className="h-px w-24 bg-secondary mb-10"></motion.div>
            
            <motion.p variants={textReveal} className="text-primary/70 text-lg leading-relaxed mb-12 font-light">
              Aotel Hotel is strategically located on the prestigious Allen Avenue in Ikeja, providing easy access to Murtala Muhammed International Airport, high-end shopping malls, and corporate headquarters.
            </motion.p>

            <motion.div variants={textReveal} className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-secondary border border-primary/10">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-3">Address</h3>
                  <p className="text-primary/70 font-light leading-relaxed">2 Owodunni St, Amore Street,<br/>Allen, Ikeja, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-secondary border border-primary/10">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-3">Phone</h3>
                  <p className="text-primary/70 font-light">+234 814 212 3782</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-secondary border border-primary/10">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-3">Email</h3>
                  <p className="text-primary/70 font-light">info@aotelhotel.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={textReveal} className="mt-14 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.google.com/?q=2+Owodunni+St,+Amore+Street,+Allen,+Ikeja,+Lagos,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-bold transition-all uppercase tracking-widest bg-primary text-white hover:bg-secondary text-xs shadow-xl shadow-primary/20"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-surface p-4 aspect-square lg:aspect-auto lg:h-[700px] w-full relative shadow-2xl border border-primary/5"
          >
            <div className="w-full h-full bg-primary/5 flex items-center justify-center border border-primary/10 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=90&w=2560&auto=format&fit=crop" alt="Map View" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" />
              <div className="relative text-center p-8 bg-white/90 backdrop-blur-md shadow-xl border border-white/50 max-w-xs">
                <MapPin size={40} className="mx-auto mb-4 text-secondary" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl text-primary mb-2">Ikeja, Lagos</h3>
                <p className="text-primary/60 text-xs uppercase tracking-widest font-bold">Premium Location</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
