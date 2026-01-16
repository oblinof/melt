import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TabId } from './types';
import GenerativeBackground from './components/GenerativeBackground';
import TabContent from './components/TabContent';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.PROPUESTA);

  const tabs = [
    { id: TabId.PROPUESTA, label: 'PROPUESTA' },
    { id: TabId.PACK1, label: 'PACK 01' },
    { id: TabId.PACK2, label: 'PACK 02' },
  ];

  return (
    <div className="relative w-full min-h-screen bg-transparent text-neutral-200 overflow-hidden flex flex-col font-mono-tech">
      <GenerativeBackground />
      <div className="noise-bg" />

      {/* Outer Industrial Frame */}
      <div className="fixed inset-2 md:inset-4 z-50 pointer-events-none">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 border border-white/20 clip-corner-bl"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] cyber-border-gradient opacity-50"></div>
        
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
        
        {/* Technical Markings */}
        <div className="absolute top-2 left-6 text-[8px] tracking-[0.3em] text-white/40">SYS.READY</div>
        <div className="absolute bottom-2 right-6 text-[8px] tracking-[0.3em] text-white/40">V.2.0.4</div>
        <div className="absolute top-1/2 left-0 w-[2px] h-12 bg-white/20 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[2px] h-12 bg-white/20 transform -translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="fixed top-6 left-0 right-0 z-40 flex justify-center items-center pointer-events-none">
        <div className="bg-black/80 backdrop-blur-md px-8 py-2 border border-neutral-800 clip-both">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-tech text-3xl font-bold tracking-tight text-white uppercase">MELT</h1>
            <div className="flex items-center justify-center space-x-2 mt-1">
               <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
               <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">MARKETING PROTOCOL</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          <TabContent activeTab={activeTab} />
        </AnimatePresence>
      </main>

      {/* Bottom Navigation Control Panel */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="bg-black border border-neutral-800 p-1 flex items-center justify-between shadow-[0_0_20px_rgba(0,0,0,0.8)] clip-both">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 py-4 px-2 transition-all duration-200 group overflow-hidden ${
                  isActive ? 'text-black' : 'text-neutral-500 hover:text-white'
                }`}
              >
                {/* Active Background Sweep */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Button Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className={`font-tech text-sm font-bold tracking-wider uppercase ${isActive ? 'text-black' : ''}`}>
                    {tab.label}
                  </span>
                  {/* Small decorative line under text */}
                  <span className={`h-[2px] w-4 mt-1 transition-all duration-300 ${isActive ? 'bg-black w-8' : 'bg-transparent group-hover:bg-neutral-700'}`} />
                </div>

                {/* Tech lines for inactive buttons */}
                {!isActive && (
                   <div className="absolute right-0 top-1/4 h-1/2 w-[1px] bg-neutral-900" />
                )}
              </button>
            );
          })}
        </div>
        {/* Decoration under nav */}
        <div className="flex justify-center mt-2 space-x-1">
           <div className="w-16 h-[2px] bg-neutral-800"></div>
           <div className="w-2 h-[2px] bg-neutral-800"></div>
           <div className="w-2 h-[2px] bg-neutral-800"></div>
        </div>
      </nav>
    </div>
  );
};

export default App;