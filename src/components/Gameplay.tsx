import React from 'react';
import { motion } from 'motion/react';

const Gameplay = () => {
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
        <div className="w-full max-w-5xl mx-auto px-4 mb-8 md:mb-12">
          <h2 className="font-heading text-5xl md:text-6xl text-synth-pink synth-text-glow text-center">How To Play</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="w-full relative h-[450px] md:h-[600px] flex flex-col md:flex-row items-center mb-8"
        >
          {/* Image side with fade-out mask */}
          <div className="w-full md:w-[60%] h-1/2 md:h-full relative overflow-hidden">
            <img 
              src="/Sample_Gameplay_Crop1-01.png" 
              alt="ประกอบกระดาน และ การแอคชั่น" 
              className="absolute inset-0 w-full h-full object-cover object-left md:object-[center_30%]"
            />
            {/* Fade out to the right for desktop */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-synth-bg z-10 hidden md:block pointer-events-none"></div>
            {/* Fade out to the bottom for mobile */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-synth-bg z-10 md:hidden pointer-events-none"></div>
          </div>

          {/* Text side */}
          <div className="w-full md:w-[40%] h-1/2 md:h-full flex flex-col justify-center px-6 py-6 md:py-0 md:pr-12 lg:pr-20 z-20 bg-synth-bg md:bg-transparent">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-3xl md:text-5xl font-heading text-[#0088cc] drop-shadow-[0_0_10px_rgba(0,136,204,0.8)] mb-3 md:mb-4">ประกอบกระดาน</h3>
              <p className="text-lg md:text-xl text-gray-300 font-light">
                ประกอบกระดานขนาดย่อม พร้อมเลือกตัวละครของคุณ
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl md:text-5xl font-heading text-[#d81b60] drop-shadow-[0_0_10px_rgba(216,27,96,0.8)] mb-3 md:mb-4">การแอคชั่น</h3>
              <p className="text-lg md:text-xl text-gray-300 font-light">
                เลือกจุดเกิด ใช้ความสามารถในการเดินเกมของคุณ จะมุ่งหน้า หรือเก็บทรัพยากร
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Group 2 */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="w-full relative h-[450px] md:h-[600px] flex flex-col md:flex-row-reverse items-center mb-8 bg-synth-bg/30"
        >
          {/* Image side with fade-out mask */}
          <div className="w-full md:w-[60%] h-1/2 md:h-full relative overflow-hidden">
            <img 
              src="/Sample_Gameplay_Crop2-01.png" 
              alt="เทิร์นศัตรู และ การโจมตีและการแอคชั่น" 
              className="absolute inset-0 w-full h-full object-cover object-left md:object-[center_30%]"
            />
            {/* Fade out to the left for desktop */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-l from-transparent to-synth-bg z-10 hidden md:block pointer-events-none"></div>
            {/* Fade out to the bottom for mobile */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-synth-bg z-10 md:hidden pointer-events-none"></div>
          </div>

          {/* Text side */}
          <div className="w-full md:w-[40%] h-1/2 md:h-full flex flex-col justify-center px-6 py-6 md:py-0 md:pl-12 lg:pl-20 z-20 bg-synth-bg md:bg-transparent">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-3xl md:text-5xl font-heading text-[#ff3366] drop-shadow-[0_0_10px_rgba(255,51,102,0.8)] mb-3 md:mb-4">เทิร์นศัตรู</h3>
              <p className="text-lg md:text-xl text-gray-300 font-light">
                เมื่อเทิร์นผู้เล่นจบลง ก็ถึงคราวของเทิร์นศัตรู เป้าหมายเดียวของพวกเขาคือการกำจัดคุณ
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl md:text-5xl font-heading text-[#9d4edd] drop-shadow-[0_0_10px_rgba(157,78,221,0.8)] mb-3 md:mb-4">การโจมตีและการแอคชั่น</h3>
              <p className="text-lg md:text-xl text-gray-300 font-light">
                ใช้การทอยเต๋าในการโจมตี และสามารถเลือกอาวุธหรือไอเทมของศัตรูที่คุณเพิ่งกำจัดไปได้
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Group 3 */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="w-full relative h-[450px] md:h-[600px] flex flex-col md:flex-row items-center mb-8"
        >
          {/* Image side with fade-out mask */}
          <div className="w-full md:w-[60%] h-1/2 md:h-full relative overflow-hidden">
            <img 
              src="/Sample_Gameplay_Crop3-01.png" 
              alt="แอคชั่นการ์ด และ เป้าหมายการชนะ" 
              className="absolute inset-0 w-full h-full object-cover object-left md:object-[center_30%]"
            />
            {/* Fade out to the right for desktop */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-synth-bg z-10 hidden md:block pointer-events-none"></div>
            {/* Fade out to the bottom for mobile */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-synth-bg z-10 md:hidden pointer-events-none"></div>
          </div>

          {/* Text side */}
          <div className="w-full md:w-[40%] h-1/2 md:h-full flex flex-col justify-center px-6 py-6 md:py-0 md:pr-12 lg:pr-20 z-20 bg-synth-bg md:bg-transparent">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-3xl md:text-5xl font-heading text-[#00ffcc] drop-shadow-[0_0_10px_rgba(0,255,204,0.8)] mb-3 md:mb-4">แอคชั่นการ์ด</h3>
              <p className="text-lg md:text-xl text-gray-300 font-light">
                การ์ดที่เก็บมาได้นั้นสำคัญ ใช้มันเพื่อเพิ่มโอกาสการเอาตัวรอดของคุณ
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl md:text-5xl font-heading text-[#ffcc00] drop-shadow-[0_0_10px_rgba(255,204,0,0.8)] mb-3 md:mb-4">เป้าหมายการชนะ</h3>
              <p className="text-lg md:text-xl text-gray-300 font-light">
                มุ่งหน้าไปยังจุดรับภารกิจ และลุล่วงเป้าหมายเพื่อเป็นผู้ชนะในเกมนี้
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gameplay;
