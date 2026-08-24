import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        <motion.div 
          initial="hidden" animate="show" variants={{
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="text-center mb-16"
        >
          <motion.p variants={textReveal} className="uppercase tracking-[0.2em] text-xs font-bold mb-4 text-secondary">
            Get In Touch
          </motion.p>
          <motion.h1 variants={textReveal} className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Contact Us
          </motion.h1>
          <motion.div variants={textReveal} className="h-px w-24 bg-secondary mx-auto mb-8"></motion.div>
          <motion.p variants={textReveal} className="text-primary/70 text-lg font-light">
            Have a question or need assistance? Our dedicated concierge team is here to help.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="bg-white p-8 md:p-16 shadow-2xl border border-primary/5"
        >
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8 border border-secondary/20">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-3xl mb-4">Inquiry Sent</h2>
              <p className="text-primary/70 font-light mb-10">Thank you for reaching out. A member of our team will assist you shortly.</p>
              <Button 
                variant="outline" 
                className="px-8 py-4 text-xs font-bold tracking-widest uppercase"
                onClick={() => setStatus('idle')}
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Full Name" required placeholder="Your full name" className="bg-background border-primary/10 h-14" />
                <Input label="Email Address" type="email" required placeholder="Your email address" className="bg-background border-primary/10 h-14" />
              </div>
              <Input label="Phone Number" type="tel" placeholder="Your phone number" className="bg-background border-primary/10 h-14" />
              <div className="w-full">
                <label className="block text-xs uppercase tracking-[0.1em] font-bold text-primary mb-3">
                  Message
                </label>
                <textarea 
                  required
                  rows={6}
                  className="w-full rounded-none border border-primary/10 bg-background px-4 py-4 text-sm focus-visible:outline-none focus-visible:border-primary focus-visible:bg-primary/5 resize-none placeholder:text-primary/30 transition-all duration-300"
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-5 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-colors duration-300 shadow-xl shadow-primary/10"
              >
                {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
