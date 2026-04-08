import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Home from './components/Home';
import Gameplay from './components/Gameplay';
import Characters from './components/Characters';
import Cards from './components/Cards';
import Navbar from './components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'gameplay': return <Gameplay />;
      case 'characters': return <Characters />;
      case 'cards': return <Cards />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a16] text-white font-kanit">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
