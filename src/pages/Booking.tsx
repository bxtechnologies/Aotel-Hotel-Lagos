import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { rooms } from '../data';
import { formatCurrency } from '../utils';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const preSelectedRoomId = searchParams.get('room');
  
  const [step, setStep] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(preSelectedRoomId || '');
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requests: ''
  });

  const selectedRoom = rooms.find(r => r.id === selectedRoomId);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else {
      // Simulate booking submission
      navigate('/booking-confirmation', { state: { booking: { ...formData, room: selectedRoom } } });
    }
  };

  const updateForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl mb-6 text-center"
          >
            Complete Your Reservation
          </motion.h1>
          
          <div className="flex justify-between items-center max-w-lg mx-auto relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/20 -z-10"></div>
            {[1, 2, 3].map(i => (
              <div 
                key={i}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 bg-surface transition-colors ${
                  step >= i ? 'border-primary text-primary' : 'border-primary/20 text-primary/40'
                } ${step === i ? 'bg-primary text-white' : ''}`}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-lg mx-auto mt-2 text-xs uppercase tracking-widest text-primary/60">
            <span>Stay Details</span>
            <span>Room</span>
            <span>Guest Info</span>
          </div>
        </div>

        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-background p-8 md:p-12 shadow-sm border border-primary/5"
        >
          <form onSubmit={handleNext}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl mb-6">Stay Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    type="date" 
                    label="Check-in Date" 
                    name="checkIn" 
                    required 
                    value={formData.checkIn}
                    onChange={updateForm}
                  />
                  <Input 
                    type="date" 
                    label="Check-out Date" 
                    name="checkOut" 
                    required 
                    value={formData.checkOut}
                    onChange={updateForm}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">Number of Guests</label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={updateForm}
                    className="w-full bg-transparent border border-primary/20 h-12 px-4 text-sm focus-visible:outline-none focus-visible:border-primary transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div className="pt-6">
                  <Button type="submit" className="w-full">Continue to Room Selection</Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl mb-6">Select a Room</h2>
                <div className="space-y-4">
                  {rooms.map(room => (
                    <div 
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-4 border-2 cursor-pointer transition-colors flex gap-4 ${
                        selectedRoomId === room.id ? 'border-primary bg-primary/5' : 'border-primary/10 hover:border-primary/30'
                      }`}
                    >
                      <img src={room.featuredImage} alt={room.name} className="w-24 h-24 object-cover hidden sm:block" />
                      <div className="flex-grow flex flex-col justify-center">
                        <h3 className="font-heading text-lg">{room.name}</h3>
                        <p className="text-primary/60 text-sm mb-2">Up to {room.capacity} Guests</p>
                        <div className="text-secondary font-medium">{formatCurrency(room.price)} / Night</div>
                      </div>
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${selectedRoomId === room.id ? 'border-primary' : 'border-primary/30'}`}>
                          {selectedRoomId === room.id && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-6 flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3">Back</Button>
                  <Button type="submit" disabled={!selectedRoomId} className="w-2/3">Continue to Guest Details</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-heading text-2xl mb-6">Guest Information</h2>
                
                {selectedRoom && (
                  <div className="mb-8 p-6 bg-surface border border-primary/10 flex justify-between items-center">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-primary/50 mb-1">Selected Room</div>
                      <div className="font-heading text-xl">{selectedRoom.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-widest text-primary/50 mb-1">Rate</div>
                      <div className="font-medium text-secondary">{formatCurrency(selectedRoom.price)}</div>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="First Name" name="firstName" required value={formData.firstName} onChange={updateForm} />
                    <Input label="Last Name" name="lastName" required value={formData.lastName} onChange={updateForm} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="email" label="Email Address" name="email" required value={formData.email} onChange={updateForm} />
                    <Input type="tel" label="Phone Number" name="phone" required value={formData.phone} onChange={updateForm} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">Special Requests (Optional)</label>
                    <textarea 
                      name="requests"
                      rows={4}
                      value={formData.requests}
                      onChange={updateForm}
                      className="w-full border border-primary/20 bg-transparent px-4 py-3 text-sm focus-visible:outline-none focus-visible:border-primary resize-none"
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-primary/10 flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="w-1/3">Back</Button>
                  <Button type="submit" className="w-2/3">Confirm Booking</Button>
                </div>
              </div>
            )}
          </form>
        </motion.div>

      </div>
    </div>
  );
}
