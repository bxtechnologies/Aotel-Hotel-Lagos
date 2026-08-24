import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { rooms } from '../data';
import { formatCurrency } from '../utils';
import { Users, Square } from 'lucide-react';

export function Rooms() {
  const textReveal = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 mt-10">
          <motion.p 
            initial="hidden" animate="show" variants={textReveal}
            className="uppercase tracking-[0.2em] text-xs font-bold mb-4 text-secondary"
          >
            Accommodations
          </motion.p>
          <motion.h1 
            initial="hidden" animate="show" variants={textReveal}
            className="font-heading text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight"
          >
            Our Rooms & Suites
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="h-px w-24 bg-secondary mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial="hidden" animate="show" variants={textReveal}
            className="max-w-2xl mx-auto text-primary/70 text-lg font-light leading-relaxed"
          >
            Discover our carefully curated selection of accommodations, designed to provide the ultimate comfort and sophistication during your stay in Lagos.
          </motion.p>
        </div>

        <div className="space-y-32">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden relative group shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={room.featuredImage} 
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="font-heading text-4xl md:text-5xl mb-6 leading-tight">{room.name}</h2>
                <div className="flex items-center gap-8 text-primary/60 text-sm mb-8 pb-8 border-b border-primary/10">
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-secondary" />
                    <span className="uppercase tracking-widest font-medium text-xs">Up to {room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Square size={18} className="text-secondary" />
                    <span className="uppercase tracking-widest font-medium text-xs">{room.size}</span>
                  </div>
                </div>
                <p className="text-primary/70 text-lg mb-10 leading-relaxed font-light">
                  {room.longDescription}
                </p>
                <div className="mb-10">
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-primary">Curated Amenities</h3>
                  <ul className="grid grid-cols-2 gap-y-4 text-primary/70 text-sm font-light">
                    {room.amenities.slice(0, 6).map((amenity, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-primary/10">
                  <div className="text-3xl font-heading text-secondary">
                    {formatCurrency(room.price)} <span className="text-xs font-sans text-primary/40 uppercase tracking-widest font-bold">/ Night</span>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <Link 
                      to={`/rooms/${room.id}`}
                      className="inline-flex items-center justify-center px-8 py-4 font-bold transition-colors uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto text-xs"
                    >
                      Details
                    </Link>
                    <Link 
                      to="/booking"
                      className="inline-flex items-center justify-center px-8 py-4 font-bold transition-colors uppercase tracking-widest bg-primary text-white hover:bg-secondary w-full sm:w-auto text-xs"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
