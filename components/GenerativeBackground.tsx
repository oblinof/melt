import React from 'react';
import { motion } from 'framer-motion';

const GenerativeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 bg-[#080808]">
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Scanning Line - Vertical */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px] bg-white/5"
        animate={{
          left: ['0%', '100%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Scanning Line - Horizontal */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-white/5"
        animate={{
          top: ['0%', '100%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles/data points */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default GenerativeBackground;