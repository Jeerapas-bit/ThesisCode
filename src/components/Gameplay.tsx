import React from 'react';

const Gameplay = () => {
  const howToPlaySteps = [
    { 
      title: 'ประกอบกระดาน', 
      desc: 'ประกอบกระดานขนาดย่อม พร้อมเลือกตัวละครของคุณ',
      color: 'bg-[#0088cc]',
      image: '/HowTo1.png'
    },
    { 
      title: 'การแอคชั่น', 
      desc: 'เลือกจุดเกิดและพร้อมความสามารถทั้งหมดในการเดินเกมของคุณ จะมุ่งหน้า หรือเก็บทรัพยากร',
      color: 'bg-[#d81b60]', 
      image: '/HowTo2.png' 
    },
    { 
      title: 'เทิร์นศัตรู', 
      desc: 'เมื่อเทิร์นผู้เล่นจบลง ก็ถึงคราวของเทิร์นศัตรู เป้าหมายเดียวของพวกเขาคือการกำจัดคุณ',
      color: 'bg-[#b71c1c]', 
      image: '/HowTo3.png' 
    },
    { 
      title: 'การโจมตีและกำจัด', 
      desc: 'ใช้การทอยในการกำจัด และสามารถเลือกอาวุธของศัตรูที่คุณพึ่งกำจัดไปได้',
      color: 'bg-[#6a1b9a]', 
      image: '/HowTo4.png' 
    },
    { 
      title: 'แอคชั่นการ์ด', 
      desc: 'การ์ดที่เก็บมาได้นั้นสำคัญ ใช้มันเพื่อเพิ่มโอกาสการเอาตัวรอดของคุณ',
      color: 'bg-[#2e7d32]', 
      image: '/HowTo5.png' 
    },
    { 
      title: 'เป้าหมายการชนะ', 
      desc: 'มุ่งหาไปรับภารกิจ และลุล่วงเพื่อปิดฉากเกมนี้',
      color: 'bg-[#fbc02d]', 
      image: '/HowTo6.png' 
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Header */}
      <div className="w-full max-w-3xl mx-auto pt-10 px-4 flex flex-col items-center -mb-8 md:-mb-16">
        <div className="w-full aspect-[2/1] relative flex items-center justify-center mt-4">
          {/* Sunset Background */}
          <div className="absolute inset-0 overflow-hidden rounded-t-full sunset-gradient opacity-80" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' }}>
          </div>
          <h1 className="relative z-10 font-heading text-5xl md:text-7xl text-white drop-shadow-lg">Gameplay</h1>
        </div>
      </div>

      {/* Key Visual */}
      <div className="w-full relative h-[400px] md:h-[500px] mb-12 flex items-center justify-center overflow-hidden border-y border-synth-pink/30">
        {/* Background Image */}
        <img 
          src="/Background-Gameplay-02.jpg" 
          alt="Gameplay Key Visual" 
          className="absolute inset-0 w-full h-full object-cover object-[center_80%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-synth-bg/80 via-synth-bg/40 to-synth-bg z-0"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-6">
            <h2 className="font-heading text-4xl md:text-5xl text-synth-pink synth-text-glow">วางแผน</h2>
            <h2 className="font-heading text-4xl md:text-5xl text-synth-pink synth-text-glow">กำจัด</h2>
            <h2 className="font-heading text-4xl md:text-5xl text-synth-pink synth-text-glow">อยู่ให้รอด</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            บอร์ดเกมแนวเดินกระดานเชิงกลยุทธ์<br/>
            วางแผนการเดิน จัดการศัตรู และใช้ความสามารถทั้งหมดที่มีเพื่อความอยู่รอด
          </p>
        </div>
      </div>

      {/* How To Play */}
      <div className="w-full">
        <div className="w-full max-w-5xl mx-auto px-4 mb-8">
          <h2 className="font-heading text-4xl md:text-5xl text-synth-pink synth-text-glow text-left">How To Play</h2>
        </div>
        <div className="flex flex-col w-full">
          {howToPlaySteps.map((step, index) => {
            const hasHoverContent = step.image || step.desc;
            
            return (
              <div 
                key={index} 
                className={`group relative w-full h-48 md:h-[400px] flex items-center justify-center overflow-hidden ${step.color} cursor-pointer`}
              >
                {/* Default State */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out z-10 ${hasHoverContent ? 'group-hover:opacity-0 group-hover:scale-95' : ''}`}>
                  <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">{step.title}</h3>
                </div>

                {/* Hover State */}
                {hasHoverContent && (
                  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 z-20 p-4 md:p-12 gap-4 md:gap-12">
                    {/* Image */}
                    {step.image && (
                      <div className="w-full md:w-1/2 h-full flex items-center justify-center transform -translate-x-8 transition-transform duration-500 ease-out group-hover:translate-x-0">
                        <img src={step.image} alt={step.title} className="max-h-full object-contain drop-shadow-2xl" />
                      </div>
                    )}
                    
                    {/* Text */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left transform translate-y-4 md:-translate-x-8 md:translate-y-0 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                      <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md mb-2 md:mb-4">{step.title}</h3>
                      {step.desc && <p className="text-base md:text-2xl text-white/90 font-light">{step.desc}</p>}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
