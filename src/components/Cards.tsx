import React from 'react';

const Cards = () => {
  const cardTypes = [
    {
      title: 'Characters Card',
      desc: 'การ์ดตัวละครที่บ่งบอกสถานะ และสกิลของตัวละคร ในการประกอบการเล่นและวางแผนของแต่ละตัวละคร',
      color: 'text-red-500',
      image: '/Characters-Cards.png',
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
    },
    {
      title: 'Passive Card',
      desc: 'การ์ดที่แสดงผลถาวร หรือกำหนดเงื่อนไขในการใช้',
      color: 'text-blue-400',
      image: '/Passive-Cards.png',
    },
    {
      title: 'Debuff Card',
      desc: 'การ์ดแสดงผลด้านลบ',
      color: 'text-purple-500',
      image: '/Debuff-Cards.png',
    },
    {
      title: 'Weapon Card',
      desc: 'การ์ดอาวุธที่ช่วยเพิ่มระยะการโจมตี หรือความสามารถในการโจมตีของตัวละครให้แข็งแกร่งขึ้น',
      color: 'text-green-500',
      image: '/Weapons-Cards.png',
    },
    {
      title: 'Mission Card',
      desc: 'การ์ดภารกิจเฉพาะของ The Tools ที่ต้องทำตามภารกิจ เพื่อเป็นผู้ชนะ',
      color: 'text-yellow-500',
      image: '/Mission-Cards.png',
    },
  ];

  return (
    <div className="flex flex-col items-center w-full pb-20">
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
            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Card Image */}
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl bg-[#1a1a2e] border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden">
                {card.image ? (
                  <img src={card.image} alt={card.title} className="w-full h-full object-contain p-4" />
                ) : (
                  <span className="text-gray-500 font-light">[ รูป {card.title} ]</span>
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
    </div>
  );
};

export default Cards;
