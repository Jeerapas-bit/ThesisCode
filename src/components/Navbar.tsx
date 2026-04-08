import React from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const NavButton = ({ id, label }: { id: string, label: string }) => (
    <button
      onClick={() => setCurrentPage(id)}
      className={`text-sm md:text-base font-medium transition-colors duration-300 ${
        currentPage === id
          ? 'text-synth-cyan synth-cyan-glow'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a16]/90 backdrop-blur-sm border-b border-synth-pink/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16 space-x-4 md:space-x-16">
          <NavButton id="home" label="Home" />
          <NavButton id="gameplay" label="Gameplay" />
          
          <div 
            className="cursor-pointer flex items-center justify-center px-2"
            onClick={() => setCurrentPage('home')}
          >
            <img 
              src="/Logo_3.png" 
              alt="Suicide Line Logo" 
              className="h-10 md:h-14 object-contain" 
            />
          </div>

          <NavButton id="characters" label="Characters" />
          <NavButton id="cards" label="Cards" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
