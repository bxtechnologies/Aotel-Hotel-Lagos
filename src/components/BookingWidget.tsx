import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users } from 'lucide-react';

export function BookingWidget() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking'); 
  };

  return (
    <div className="bg-white/90 backdrop-blur-xl p-8 lg:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] w-full max-w-5xl mx-auto -mt-24 relative z-20 border border-white/50 rounded-sm">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        <div className="space-y-3">
          <label className="block text-[10px] uppercase tracking-[0.2em] text-primary/70 font-bold">Check-In</label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} strokeWidth={1.5} />
            <input 
              type="date" 
              required
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-surface border-b border-primary/20 h-12 pl-12 pr-4 text-sm focus:outline-none focus:border-primary focus:bg-primary/5 transition-all cursor-pointer"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="block text-[10px] uppercase tracking-[0.2em] text-primary/70 font-bold">Check-Out</label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} strokeWidth={1.5} />
            <input 
              type="date" 
              required
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-surface border-b border-primary/20 h-12 pl-12 pr-4 text-sm focus:outline-none focus:border-primary focus:bg-primary/5 transition-all cursor-pointer"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="block text-[10px] uppercase tracking-[0.2em] text-primary/70 font-bold">Guests</label>
          <div className="relative group">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} strokeWidth={1.5} />
            <select 
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-surface border-b border-primary/20 h-12 pl-12 pr-4 text-sm focus:outline-none focus:border-primary focus:bg-primary/5 transition-all appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full h-12 bg-primary text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-secondary transition-colors duration-300 shadow-xl shadow-primary/10"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
}
