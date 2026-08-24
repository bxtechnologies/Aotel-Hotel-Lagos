import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { BookingWidget } from '../components/BookingWidget';
import { rooms, galleryImages } from '../data';
import { formatCurrency } from '../utils';

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax configuration
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 350]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Staggered text variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };
  
  const textReveal = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[100svh] min-h-[700px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0 origin-center"
          style={{ y: heroY }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=90&w=2560&auto=format&fit=crop" 
            alt="Aotel Hotel Lagos exterior" 
            className="w-full h-full object-cover scale-105"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/60"></div>
        </motion.div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10 w-full pb-24 sm:pb-0"
          style={{ opacity: heroOpacity }}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={textReveal} className="uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-8 text-secondary">
            Welcome to an Oasis of Elegance
          </motion.p>
          <motion.h1 variants={textReveal} className="font-heading text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] font-medium">
            Elevated Living in the <br/>
            <span className="italic font-light text-white/90">Heart of Lagos</span>
          </motion.h1>
          <motion.p variants={textReveal} className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-14 font-light leading-relaxed">
            Immerse yourself in unparalleled luxury, bespoke service, and architectural elegance in Lagos's most prestigious district.
          </motion.p>
          
          <motion.div variants={textReveal} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/booking"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold transition-all uppercase tracking-widest bg-secondary text-white overflow-hidden w-full sm:w-auto shadow-2xl shadow-secondary/20"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative">Reserve Your Stay</span>
            </Link>
            <Link 
              to="/rooms"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold transition-all uppercase tracking-widest border border-white/50 text-white hover:bg-white hover:text-primary w-full sm:w-auto"
            >
              <span className="relative">Explore Suites</span>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-3 text-white/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Discover</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* Booking Widget Wrapper */}
      <div className="px-4 sm:px-6 lg:px-8 relative z-20">
        <BookingWidget />
      </div>

      {/* Story / About Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="uppercase tracking-[0.2em] text-xs font-bold mb-4 text-secondary">The Experience</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">Redefining Luxury<br/>Hospitality in Lagos</h2>
              <p className="text-primary/70 text-lg leading-relaxed mb-8 font-light">
                Located on the prestigious Allen Avenue in Ikeja, Aotel Hotel offers an oasis of tranquility amidst the bustling city. Our newly appointed suites are meticulously designed with the modern traveler in mind, combining elegant aesthetics with uncompromising comfort.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {['Curated Interiors', 'World-Class Dining', 'Bespoke Services', 'Prime Location'].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="text-primary font-medium tracking-wide text-sm uppercase">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/about"
                className="group relative inline-flex items-center justify-center pb-2 text-sm font-bold uppercase tracking-widest text-primary overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-secondary transition-colors duration-300">Discover Our Story</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary group-hover:bg-secondary transition-colors duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-500 ease-out z-20"></span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] relative z-10 overflow-hidden shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=90&w=2560&auto=format&fit=crop" 
                  alt="Hotel interior detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-surface shadow-xl z-0 hidden md:block border border-primary/5"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-16 -right-16 w-32 h-32 border border-secondary/30 rounded-full z-0 hidden md:block"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Suites */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[0.2em] text-xs font-bold mb-4 text-secondary">Accommodations</p>
            <h2 className="font-heading text-4xl md:text-6xl mb-6">Curated Sanctuaries</h2>
            <p className="text-primary/60 max-w-2xl mx-auto text-lg font-light">
              Each space is thoughtfully crafted to provide the ultimate in relaxation and sophistication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.map((room, index) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-background overflow-hidden border border-primary/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={room.featuredImage} 
                    alt={room.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <Link 
                      to={`/rooms/${room.id}`}
                      className="px-8 py-3 bg-white/95 text-primary text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors"
                    >
                      Discover
                    </Link>
                  </div>
                </div>
                <div className="p-8 text-center flex-grow flex flex-col">
                  <h3 className="font-heading text-2xl mb-4">{room.name}</h3>
                  <p className="text-primary/60 text-sm mb-8 leading-relaxed font-light flex-grow line-clamp-3">{room.description}</p>
                  <p className="text-secondary font-medium tracking-wide mb-8">
                    From {formatCurrency(room.price)} <span className="text-xs text-primary/40">/ Night</span>
                  </p>
                  <Link 
                    to="/booking"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold transition-colors uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Reserve
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 text-center"
          >
            <Link 
              to="/rooms"
              className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold transition-colors uppercase tracking-widest border-b-2 border-primary text-primary hover:text-secondary hover:border-secondary"
            >
              View All Accommodations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Visual Gallery Preview */}
      <section className="py-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.slice(0, 4).map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="aspect-square overflow-hidden relative group"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-heading tracking-[0.2em] uppercase text-sm font-medium">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
