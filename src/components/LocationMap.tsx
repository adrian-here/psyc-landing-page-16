
import React, { useState } from 'react';
import { MapPin, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const LocationMap = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsMapOpen(true)}
        className="w-full bg-psyc-orange hover:bg-amber-500 text-white flex items-center space-x-2"
      >
        <MapPin size={18} />
        <span>View Our Location</span>
        <ExternalLink size={16} />
      </Button>

      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsMapOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/90 border border-psyc-orange/30 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-psyc-orange">AICDSU Foundation - Incubation Center</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMapOpen(false)}
                  className="text-white hover:text-psyc-orange"
                >
                  <X size={20} />
                </Button>
              </div>
              
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.63842738821588!2d77.6634447!3d12.8625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b9a4bce6fc5%3A0x9f1f1f1f1f1f1f1f!2sAICDSU%20Foundation!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <p className="text-white/80 text-sm">
                  VJPR+WGG, Service Rd, Kudlu Main Rd, Srinivasa Nagar, Hal Layout, Singasandra, Bengaluru, Karnataka 560068
                </p>
                <a
                  href="https://maps.app.goo.gl/uLJePkq87Av9YD7i8?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-psyc-orange hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocationMap;
