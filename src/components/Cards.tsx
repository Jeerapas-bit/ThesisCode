import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cardTypes = [
    {
      title: 'Characters Card',
      desc: 'การ์ดตัวละครที่บ่งบอกสถานะ และสกิลของตัวละคร ในการประกอบการเล่นและวางแผนของแต่ละตัวละคร',
      color: 'text-red-500',
      image: '/Characters-Cards.png',
      carouselImages: [
        '/MC_Card_1.png',
        '/MC_Card_2.png',
        '/MC_Card_3.png',
        '/MC_Card_4.png',
        '/Ememy_Card_1.png',
        '/Ememy_Card_2.png',
        '/Ememy_Card_3.png',
        '/Ememy_Card_4.png',
        '/Ememy_Card_5.png',
        '/Ememy_Card_6.png',
        '/Ememy_Card_7.png',
        '/Ememy_Card_Spawned.png',
        '/Boss_Card_1.png',
        '/Boss_Card_2.png',
        '/Boss_Card_3.png',
        '/Boss_Card_4.png',
        '/Boss_Card_5.png',
      ]
    },
    {
      title: 'Skill Card',
      desc: 'การ์ดสกิลที่ใช้สำหรับเล่นเพื่อส่งผลออกเป็น 1 ประเภท',
      color: 'text-red-400',
      image: '/All-Skill-Cards.png',
    },
    {
      title: 'Active Card',
      desc: 'การ์ดประเภทใช้งาน ที่เมื่อใช้แล้วจะแสดงผลทันที',
      color: 'text-pink-500',
      image: '/Active-Cards.png',
      carouselImages: Array.from({ length: 20 }, (_, i) => `/Card_Active_${i + 1}.png`),
    },
    {
      title: 'Passive Card',
      desc: 'การ์ดที่แสดงผลถาวร หรือกำหนดเงื่อนไขในการใช้',
      color: 'text-blue-400',
      image: '/Passive-Cards.png',
      carouselImages: Array.from({ length: 20 }, (_, i) => `/Card_Passive_${i + 1}.png`),
    },
    {
      title: 'Debuff Card',
      desc: 'การ์ดแสดงผลด้านลบ',
      color: 'text-purple-500',
      image: '/Debuff-Cards.png',
      carouselImages: Array.from({ length: 20 }, (_, i) => `/Card_Debuff_${i + 1}.png`),
    },
    {
      title: 'Weapon Card',
      desc: 'การ์ดอาวุธที่ช่วยเพิ่มระยะการโจมตี หรือความสามารถในการโจมตีของตัวละครให้แข็งแกร่งขึ้น',
      color: 'text-green-500',
      image: '/Weapons-Cards.png',
      carouselImages: Array.from({ length: 5 }, (_, i) => `/Card_Weapon_${i + 1}.png`),
    },
    {
      title: 'Mission Card',
      desc: 'การ์ดภารกิจเฉพาะของ The Tools ที่ต้องทำตามภารกิจ เพื่อเป็นผู้ชนะ',
      color: 'text-yellow-500',
      image: '/Mission-Cards.png',
      carouselImages: Array.from({ length: 2 }, (_, i) => `/Card_Mission_${i + 1}.png`),
    },
  ];

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCard]);

  const openPopup = (card: any) => {
    setSelectedCard(card);
    setCurrentImageIndex(0);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCard && selectedCard.carouselImages) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCard.carouselImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCard && selectedCard.carouselImages) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedCard.carouselImages.length) % selectedCard.carouselImages.length);
    }
  };

  return (
    <div className="flex flex-col items-center w-full pb-20 relative">
      {/* Header */}
      <div className="w-full max-w-3xl mx-auto pt-10 px-4 flex flex-col items-center mb-12">
        <div className="w-full aspect-[2/1] relative flex flex-col items-center justify-start pt-8 mb-16 md:mb-24 mt-4">
          {/* Sunset Background */}
          <div className="absolute inset-0 overflow-hidden rounded-t-full sunset-gradient opacity-80" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' }}>
          </div>
          <h1 className="relative z-10 font-heading text-5xl md:text-7xl text-white drop-shadow-lg mb-8">Cards</h1>
          {/* Cards Group Image */}
          <div className="relative z-10 w-11/12 md:w-full flex items-center justify-center transform rotate-[-5deg] mt-2">
            <img src="/All-Cards.png" alt="All Cards" className="w-full h-auto object-contain drop-shadow-2xl scale-110 md:scale-125" />
          </div>
        </div>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
          การ์ดเกมนี้จะมีเอกลักษณ์เฉพาะตัว และความสามารถ ที่แตกต่างกันออกไป
        </p>
      </div>

      {/* Cards List */}
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-16">
        {cardTypes.map((card, index) => (
          <React.Fragment key={index}>
            <div 
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} ${card.carouselImages ? 'cursor-pointer group' : ''}`}
              onClick={() => card.carouselImages && openPopup(card)}
            >
              {/* Card Image */}
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl bg-[#1a1a2e] border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden relative">
                {card.image ? (
                  <img src={card.image} alt={card.title} className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <span className="text-gray-500 font-light">[ รูป {card.title} ]</span>
                )}
                
                {card.carouselImages && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <span className="text-white font-bold text-lg md:text-xl drop-shadow-md bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-synth-pink/30">คลิกเพื่อดูการ์ด</span>
                  </div>
                )}
              </div>
              
              {/* Card Info */}
              <div className={`w-full md:w-1/2 text-center md:text-left ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                <h2 className={`font-heading text-3xl md:text-4xl mb-4 ${card.color} drop-shadow-md`}>{card.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
            {/* Divider */}
            {index < cardTypes.length - 1 && (
              <div className="w-1/2 mx-auto h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
      {selectedCard && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={closePopup}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-[110] bg-black/50 p-2 rounded-full"
            onClick={closePopup}
          >
            <X size={32} />
          </button>

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl aspect-[16/9] md:aspect-auto md:h-[80vh] bg-[#0f0f1a] rounded-2xl border-2 border-synth-cyan/50 shadow-[0_0_30px_rgba(5,217,232,0.3)] flex flex-col items-center justify-center p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center mt-12 md:mt-16">
              
              {/* Left Arrow */}
              <button 
                className="absolute left-2 md:left-8 z-30 text-synth-cyan hover:text-white hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(5,217,232,0.8)]"
                onClick={prevImage}
              >
                <ChevronLeft size={64} strokeWidth={1.5} />
              </button>

              {/* Images */}
              <div className="relative w-[85%] h-[85%] md:h-[90%] flex items-center justify-center">
                {selectedCard.carouselImages.map((img: string, idx: number) => {
                  let scale = 0;
                  let translateX = '0%';
                  let opacity = 0;
                  let brightness = 1;
                  let zIndex = 0;
                  
                  const diff = (idx - currentImageIndex + selectedCard.carouselImages.length) % selectedCard.carouselImages.length;
                  
                  if (diff === 0) {
                    // Current Card (Center)
                    scale = 1.1;
                    translateX = '0%';
                    opacity = 1;
                    brightness = 1;
                    zIndex = 20;
                  } else if (diff === 1 && selectedCard.carouselImages.length > 2) {
                    // Next Card (Right)
                    scale = 0.9;
                    translateX = '100%';
                    opacity = 0.5;
                    brightness = 0.5;
                    zIndex = 10;
                  } else if (diff === 1 && selectedCard.carouselImages.length === 2) {
                    // Next Card (Right) if only 2 elements
                    scale = 0.9;
                    translateX = '100%';
                    opacity = 0.5;
                    brightness = 0.5;
                    zIndex = 10;
                  } else if (diff === selectedCard.carouselImages.length - 1 && selectedCard.carouselImages.length > 2) {
                    // Previous Card (Left)
                    scale = 0.9;
                    translateX = '-100%';
                    opacity = 0.5;
                    brightness = 0.5;
                    zIndex = 10;
                  } else {
                    // Hidden Cards
                    scale = 0.75;
                    translateX = diff > selectedCard.carouselImages.length / 2 ? '-150%' : '150%';
                    opacity = 0;
                    brightness = 0.5;
                    zIndex = 0;
                  }

                  return (
                    <motion.div 
                      key={idx}
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center origin-center"
                      style={{ zIndex }}
                      initial={false}
                      animate={{
                        scale: scale,
                        x: translateX,
                        opacity: opacity,
                        filter: `brightness(${brightness})`,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <img 
                        src={img} 
                        alt={`${selectedCard.title} ${idx + 1}`} 
                        className={`max-h-full max-w-full object-contain rounded-xl ${diff === 0 ? 'shadow-[0_0_40px_rgba(255,255,255,0.2)] md:shadow-none' : ''}`}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Arrow */}
              <button 
                className="absolute right-2 md:right-8 z-30 text-synth-cyan hover:text-white hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(5,217,232,0.8)]"
                onClick={nextImage}
              >
                <ChevronRight size={64} strokeWidth={1.5} />
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
