import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { rooms } from '../data';
import { formatCurrency } from '../utils';
import { Users, Square, BedDouble, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const room = rooms.find(r => r.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 text-center px-4">
        <h1 className="font-heading text-4xl mb-6">Room not found</h1>
        <p className="mb-8 text-primary/70">The room you are looking for does not exist or has been removed.</p>
        <Link 
          to="/rooms"
          className="inline-flex items-center justify-center px-6 py-3 font-medium transition-colors uppercase tracking-wide border border-primary text-primary hover:bg-primary hover:text-white"
        >
          Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm uppercase tracking-widest text-primary/60 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl mb-6"
            >
              {room.name}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={room.featuredImage} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-rows-2 gap-4 h-full">
                {room.images.slice(1, 3).map((img, idx) => (
                  <div key={idx} className="w-full h-full overflow-hidden">
                    <img src={img} alt={`${room.name} detail`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-heading text-2xl mb-4">About This Room</h2>
              <p className="text-primary/80 leading-relaxed mb-6">{room.longDescription}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl mb-6">Room Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-surface">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    <span className="text-primary/80">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-surface p-8 shadow-sm border-t-4 border-secondary">
              <div className="text-3xl font-heading text-secondary mb-2">
                {formatCurrency(room.price)}
              </div>
              <div className="text-sm uppercase tracking-widest text-primary/50 mb-8 pb-6 border-b border-primary/10">
                Per Night
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary/50 mb-1">Capacity</div>
                    <div className="font-medium">Up to {room.capacity} Guests</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Square size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary/50 mb-1">Room Size</div>
                    <div className="font-medium">{room.size}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <BedDouble size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary/50 mb-1">Bed Type</div>
                    <div className="font-medium">{room.bedType}</div>
                  </div>
                </div>
              </div>

              <Link 
                to={`/booking?room=${room.id}`}
                className="inline-flex items-center justify-center w-full px-6 py-4 font-medium transition-colors uppercase tracking-wide bg-primary text-white hover:bg-opacity-90"
              >
                Book This Room
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
