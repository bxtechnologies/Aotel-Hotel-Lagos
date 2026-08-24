import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { amenitiesList } from '../data';

export function Amenities() {
  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        <div className="text-center mb-24">
          <motion.p 
            initial="hidden" animate="show" variants={textReveal}
            className="uppercase tracking-[0.2em] text-xs font-bold mb-4 text-secondary"
          >
            Signature Services
          </motion.p>
          <motion.h1 
            initial="hidden" animate="show" variants={textReveal}
            className="font-heading text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Hotel Amenities
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="h-px w-24 bg-secondary mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial="hidden" animate="show" variants={textReveal}
            className="max-w-2xl mx-auto text-primary/70 text-lg font-light leading-relaxed"
          >
            We have meticulously curated an array of premium amenities to ensure your stay is as effortless as it is extraordinary.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesList.map((amenity, index) => {
            const Icon = Icons[amenity.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div 
                key={amenity.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-10 flex flex-col items-center text-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5 group"
              >
                <div className="w-20 h-20 rounded-full bg-primary/5 group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-8 text-secondary transition-colors duration-500">
                  {Icon && <Icon size={32} strokeWidth={1} />}
                </div>
                <h3 className="font-heading text-2xl mb-4 group-hover:text-secondary transition-colors">{amenity.name}</h3>
                <div className="w-8 h-px bg-primary/10 group-hover:bg-secondary transition-colors duration-500"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
