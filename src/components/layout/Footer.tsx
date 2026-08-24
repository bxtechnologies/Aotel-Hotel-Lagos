import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h2 className="font-heading text-2xl tracking-widest uppercase">Aotel</h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Experience modern luxury and comfort in the heart of Ikeja at Aotel Hotel Lagos Owodunni.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Rooms', 'Amenities', 'Gallery', 'About'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white/70 hover:text-secondary transition-colors text-sm uppercase tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6 uppercase tracking-wider">Help & Info</h3>
            <ul className="space-y-4">
              {['Location', 'Contact', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Location' || item === 'Contact' ? `/${item.toLowerCase()}` : '#'} className="text-white/70 hover:text-secondary transition-colors text-sm uppercase tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-lg uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-white/70 text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-secondary" />
                <span>2 Owodunni St, Amore Street,<br/>Allen, Ikeja, Lagos, Nigeria</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-secondary" />
                <a href="tel:+2348142123782" className="hover:text-secondary transition-colors">+234 814 212 3782</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-secondary" />
                <a href="mailto:info@aotelhotel.com" className="hover:text-secondary transition-colors">info@aotelhotel.com</a>
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Aotel Hotel Lagos Owodunni. All rights reserved.</p>
          <p>Designed for Luxury</p>
        </div>
      </div>
    </footer>
  );
}
