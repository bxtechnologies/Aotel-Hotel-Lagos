import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Users, BedDouble } from 'lucide-react';
import { formatCurrency } from '../utils';

export function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  useEffect(() => {
    if (!booking) {
      navigate('/booking');
    }
  }, [booking, navigate]);

  if (!booking) return null;

  const refNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-surface flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-background p-8 md:p-12 shadow-xl border-t-4 border-secondary text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50"></div>
          
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          
          <h1 className="font-heading text-4xl mb-2">Booking Confirmed</h1>
          <p className="text-primary/60 text-lg mb-8">Thank you, {booking.firstName}. Your reservation is complete.</p>
          
          <div className="inline-block bg-surface px-6 py-3 mb-10 border border-primary/5">
            <p className="text-xs uppercase tracking-widest text-primary/50 mb-1">Confirmation Number</p>
            <p className="font-mono text-xl font-bold tracking-wider">{refNumber}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-y border-primary/10 py-8 mb-10">
            <div>
              <h3 className="font-heading text-xl mb-4">Reservation Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Calendar className="text-secondary shrink-0 mt-0.5" size={20} />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-primary/50 mb-0.5">Dates</span>
                    <span className="font-medium">{booking.checkIn || 'TBD'} to {booking.checkOut || 'TBD'}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-secondary shrink-0 mt-0.5" size={20} />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-primary/50 mb-0.5">Guests</span>
                    <span className="font-medium">{booking.guests} Guest(s)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BedDouble className="text-secondary shrink-0 mt-0.5" size={20} />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-primary/50 mb-0.5">Room</span>
                    <span className="font-medium">{booking.room?.name}</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-surface p-6">
              <h3 className="font-heading text-xl mb-4">Payment Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary/70">Room Rate</span>
                  <span>{formatCurrency(booking.room?.price || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary/70">Taxes & Fees</span>
                  <span>{formatCurrency((booking.room?.price || 0) * 0.1)}</span>
                </div>
                <div className="border-t border-primary/20 pt-3 flex justify-between font-medium text-lg mt-2">
                  <span>Total (Per Night)</span>
                  <span className="text-secondary">{formatCurrency((booking.room?.price || 0) * 1.1)}</span>
                </div>
              </div>
              <p className="text-xs text-primary/50 mt-6 leading-relaxed">
                Payment will be collected upon arrival. We have sent a confirmation email to {booking.email}.
              </p>
            </div>
          </div>

          <Link 
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 font-medium transition-colors uppercase tracking-wide bg-primary text-white hover:bg-opacity-90"
          >
            Return to Home
          </Link>
          
        </motion.div>

      </div>
    </div>
  );
}
