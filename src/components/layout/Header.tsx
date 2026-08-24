import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../../utils';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Delay scroll to top until after the exit animation completes
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const shouldBeSolid = isScrolled || isMobileMenuOpen || !isHomePage;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          shouldBeSolid 
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/20 py-4' 
            : 'bg-transparent py-8'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 z-50 group">
              <span className={cn(
                "font-heading text-xl md:text-2xl font-bold tracking-[0.2em] uppercase transition-colors duration-500", 
                shouldBeSolid ? "text-primary" : "text-white group-hover:text-white/80"
              )}>
                Aotel
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300",
                    shouldBeSolid 
                      ? "text-primary/70 hover:text-primary after:bg-primary" 
                      : "text-white/80 hover:text-white after:bg-white",
                    location.pathname === link.path && (shouldBeSolid ? "text-primary after:w-full" : "text-white after:w-full")
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/booking"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 text-xs font-bold transition-all duration-300 uppercase tracking-widest relative overflow-hidden group",
                  shouldBeSolid 
                    ? "bg-primary text-white hover:shadow-xl hover:shadow-primary/20" 
                    : "bg-white text-primary hover:bg-white/90 hover:shadow-xl hover:shadow-white/20"
                )}
              >
                <span className="relative z-10">Book Now</span>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden z-50 p-2 transition-colors duration-300", 
                shouldBeSolid ? "text-primary" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/95 pt-24 px-4 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col h-full max-w-sm mx-auto">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      className="text-3xl font-heading text-primary hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-auto pt-12 flex flex-col gap-6"
              >
                <a href="tel:+2348142123782" className="flex items-center justify-center gap-3 text-primary">
                  <Phone size={18} />
                  <span className="tracking-widest text-sm">+234 814 212 3782</span>
                </a>
                <Link 
                  to="/booking"
                  className="inline-flex items-center justify-center w-full px-6 py-5 bg-primary text-white text-sm font-bold transition-all uppercase tracking-widest shadow-xl shadow-primary/20"
                >
                  Book Your Stay
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
