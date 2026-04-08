import React from 'react';

const Characters = () => {
  const tools: { name: string; color: string; image?: string; imageClass?: string; desc?: string }[] = [
    { 
      name: 'The Brawler', 
      color: 'bg-[#d81b60]', 
      image: '/MC-1.png', 
      imageClass: 'object-cover object-[50%_10%]',
      desc: 'นักเลงประจำถิ่นที่คอยไล่หวดคนที่มีปัญหากับเขา หรือครอบครัวของเขา และเคยมีปัญหากับแก๊งมาเฟีย ที่จะมายึดพื้นที่ของเขา แม้เขาจะแพ้ แต่ความแค้น และความเลือดเย็นนี้ ก็ได้ไปตบตาของ ผู้มอบหมายนิรนาม',
    },
    { 
      name: 'The Rider', 
      color: 'bg-[#1976d2]', 
      image: '/MC-2.png', 
      imageClass: 'object-cover object-[50%_20%]',
      desc: 'นักบิดที่เคยมีปัญหากับแก๊งมาเฟีย จึงได้รับผลกระทบจากเหล่ามาเฟียทำให้ถูกขโมยทรัพย์สินจำนวนหนึ่งไป จึงมีความเคียดแค้นต่อแก๊งมาเฟียเป็นอย่างมากจนเรื่องนี้ได้ไปถึงหูของ ผู้มอบหมายนิรนาม',
    },
    { 
      name: 'The Officer', 
      color: 'bg-[#e64a19]', 
      image: '/MC-3.png', 
      imageClass: 'object-cover object-[50%_10%]',
      desc: 'อดีตตำรวจที่ละทิ้งองค์กร เนื่องจากรู้ว่าองค์กรมีการร่วมมือกันกับแก๊งมาเฟีย เขาจึงเลือกที่จะออกมาและจัดการเรื่องต่างๆ ด้วยตัวเอง แม้จะเป็นวิธีที่ไม่ถูกต้องก็ตาม และเรื่องนี้ได้ไปถึง ผู้มอบหมายนิรนาม',
    },
    { 
      name: 'The Hitman', 
      color: 'bg-[#5e35b1]', 
      image: '/MC-4.png', 
      imageClass: 'object-cover object-[50%_10%]',
      desc: 'มือปืนรับจ้างอิสระที่คอยรับงานจากผู้มีอำนาจ เขาได้วางมือจากวงการไปแล้ว แต่สิ่งที่เขาเคยทำเอาไว้ได้กลับมาทำร้ายเขาผ่านแก๊งมาเฟีย เขาได้สูญเสียสิ่งรอบข้างไป จึงทำให้เขาต้องกลับมาจับปืนอีกครั้ง จึงเป็นเป้าหมายตาของ ผู้มอบหมายนิรนาม',
    },
  ];

  const mafia: { name: string; color: string; image?: string; imageClass?: string; desc?: string }[] = [
    { 
      name: 'Minions', 
      color: 'bg-[#b71c1c]', 
      image: '/Minions-01.png', 
      imageClass: 'object-contain object-bottom',
      desc: 'ลูกสมุนมาเฟียที่คอยรับหน้าที่ทำตามคำสั่งจากเบื้องบนอยู่เสมอ',
    },
    { 
      name: 'The Savage Fist', 
      color: 'bg-[#880e4f]', 
      image: '/Boss-1.png', 
      imageClass: 'object-cover object-[50%_10%]',
      desc: 'มือขวาขององค์กร ที่มักใช้กำปั้นแก้ปัญหา',
    },
    { 
      name: 'The Mad Boy', 
      color: 'bg-[#b71c1c]', 
      image: '/Boss-2.png', 
      imageClass: 'object-cover object-[50%_10%]',
      desc: 'บอสหน้าใหม่ที่คอยควบคุมเรื่องสารเสพติดในองค์กร',
    },
    { 
      name: 'The Blade', 
      color: 'bg-[#880e4f]', 
      image: '/Boss-3.png', 
      imageClass: 'object-cover object-[50%_10%]',
      desc: 'นักดาบประจำองค์กร มีฝีมือที่ร้ายกาจและเป็นที่หน้าเกรงขาม',
    },
    { 
      name: 'The Commander', 
      color: 'bg-[#b71c1c]', 
      image: '/Boss-4.png', 
      imageClass: 'object-cover object-[50%_10%]',
      desc: 'ผู้บัญชาการคำสั่งต่างๆ และเป็นหัวแถวในการออกภารกิจ',
    },
    { 
      name: 'The Father', 
      color: 'bg-[#880e4f]', 
      image: '/Boss-5.png', 
      imageClass: 'object-cover object-[50%_10%]',
      desc: 'บอสแห่งองค์กรแห่งนี้ และเป็นผู้อยู่เบื้องหลังคำสั่งต่างๆ',
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Header */}
      <div className="w-full max-w-3xl mx-auto pt-10 px-4 flex flex-col items-center -mb-8 md:-mb-16">
        <div className="w-full aspect-[2/1] relative flex flex-col items-center justify-center mt-4">
          {/* Sunset Background */}
          <div className="absolute inset-0 overflow-hidden rounded-t-full sunset-gradient opacity-80" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' }}>
          </div>
          <h1 className="relative z-10 font-heading text-5xl md:text-7xl text-white drop-shadow-lg">Characters</h1>
        </div>
      </div>

      {/* Factions Description with Images */}
      <div className="w-full flex flex-col md:flex-row mb-16">
        {/* The Tools */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="w-full flex justify-center items-end h-80 md:h-[500px]">
            <img src="/The-Tools-Team-01.png" alt="The Tools Team" className="h-full object-contain object-bottom" />
          </div>
          <div className="w-full flex-1 bg-[#d81b60] py-8 px-6 text-center flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-2">The Tools</h2>
            <p className="text-white/80 text-sm mb-4">Main Characters</p>
            <p className="text-white text-sm md:text-base max-w-md mx-auto">
              เหล่าตัวละครฝั่งพระเอก ที่ถูกผู้มอบหมายนิรนาม ใช้งานทำการจัดตั้งแก๊งมาเฟียที่เป็นภัยคุกคามต่อบ้านเมือง จึงถูกเรียกว่า เหล่าเครื่องมือ
            </p>
          </div>
        </div>

        {/* Mafia */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="w-full flex justify-center items-end h-80 md:h-[500px]">
            <img src="/Mafia-Team-01.png" alt="Mafia Team" className="h-full object-contain object-bottom" />
          </div>
          <div className="w-full flex-1 bg-[#b71c1c] py-8 px-6 text-center flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-2">Mafia</h2>
            <p className="text-white/80 text-sm mb-4">Enemies and Boss</p>
            <p className="text-white text-sm md:text-base max-w-md mx-auto">
              เหล่ามาเฟียผู้มีอำนาจในเมืองคอยสร้างความเดือดร้อน คอยขูดรีด และทำธุรกิจผิดกฎหมายต่างๆ มาเป็นของตน จึงเป็นเป้าหมายหลักของผู้มอบหมายนิรนาม ที่ต้องการกำจัดคนพวกนี้ให้หมดไปจากประเทศ
            </p>
          </div>
        </div>
      </div>

      {/* The Tools List */}
      <div className="w-full mb-16">
        <h2 className="font-heading text-6xl md:text-8xl text-synth-purple synth-text-glow px-4 max-w-5xl mx-auto mb-8 text-center">The Tools</h2>
        <div className="flex flex-col w-full">
          {tools.map((char, index) => {
            const hasHoverContent = char.image || char.desc;
            
            return (
              <div key={index} className={`group relative w-full h-64 md:h-[400px] flex items-center justify-center ${char.color} overflow-hidden cursor-pointer`}>
                {/* Default State */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out z-10 ${hasHoverContent ? 'group-hover:opacity-0 group-hover:scale-95' : ''}`}>
                  <h3 className="absolute z-0 font-heading text-6xl md:text-8xl text-white/60 whitespace-nowrap">{char.name}</h3>
                  {char.image ? (
                    <img src={char.image} alt={char.name} className={`relative z-10 w-full h-full ${char.imageClass || 'object-cover object-top'}`} />
                  ) : (
                    <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 placeholder-img rounded-full bg-black/20 border-none">
                      [ รูป {char.name} ]
                    </div>
                  )}
                </div>

                {/* Hover State */}
                {hasHoverContent && (
                  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 z-20 p-4 md:p-12 gap-4 md:gap-12">
                    {/* Image */}
                    {char.image && (
                      <div className="w-full md:w-1/2 h-full flex items-center justify-center transform -translate-x-8 transition-transform duration-500 ease-out group-hover:translate-x-0">
                        <img src={char.image} alt={char.name} className="max-h-full object-contain drop-shadow-2xl" />
                      </div>
                    )}
                    
                    {/* Text */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left transform translate-y-4 md:-translate-x-8 md:translate-y-0 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                      <h3 className="text-4xl md:text-6xl font-heading text-white drop-shadow-md mb-2 md:mb-4">{char.name}</h3>
                      {char.desc && <p className="text-base md:text-xl text-white/90 font-light leading-relaxed">{char.desc}</p>}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mafia List */}
      <div className="w-full mb-16">
        <h2 className="font-heading text-6xl md:text-8xl text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] px-4 max-w-5xl mx-auto mb-8 text-center">Mafia</h2>
        <div className="flex flex-col w-full">
          {mafia.map((char, index) => {
            const hasHoverContent = char.image || char.desc;
            
            return (
              <div key={index} className={`group relative w-full h-64 md:h-[400px] flex items-center justify-center ${char.color} overflow-hidden cursor-pointer`}>
                {/* Default State */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out z-10 ${hasHoverContent ? 'group-hover:opacity-0 group-hover:scale-95' : ''}`}>
                  <h3 className="absolute z-0 font-heading text-6xl md:text-8xl text-white/60 whitespace-nowrap">{char.name}</h3>
                  {char.image ? (
                    <img src={char.image} alt={char.name} className={`relative z-10 w-full h-full ${char.imageClass || 'object-cover object-top'}`} />
                  ) : (
                    <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 placeholder-img rounded-full bg-black/20 border-none">
                      [ รูป {char.name} ]
                    </div>
                  )}
                </div>

                {/* Hover State */}
                {hasHoverContent && (
                  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 z-20 p-4 md:p-12 gap-4 md:gap-12">
                    {/* Image */}
                    {char.image && (
                      <div className="w-full md:w-1/2 h-full flex items-center justify-center transform -translate-x-8 transition-transform duration-500 ease-out group-hover:translate-x-0">
                        <img src={char.image} alt={char.name} className="max-h-full object-contain drop-shadow-2xl" />
                      </div>
                    )}
                    
                    {/* Text */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left transform translate-y-4 md:-translate-x-8 md:translate-y-0 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                      <h3 className="text-4xl md:text-6xl font-heading text-white drop-shadow-md mb-2 md:mb-4">{char.name}</h3>
                      {char.desc && <p className="text-base md:text-xl text-white/90 font-light leading-relaxed">{char.desc}</p>}
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

export default Characters;
