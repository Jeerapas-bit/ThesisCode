import React from 'react';
import { motion } from 'motion/react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-full max-w-5xl mx-auto pt-10 px-4 flex flex-col items-center">
        {/* Big Logo */}
        <div className="w-full max-w-3xl aspect-[2/1] relative flex items-center justify-center mb-12 mt-4">
          {/* Sunset Background */}
          <div className="absolute inset-0 overflow-hidden rounded-t-full sunset-gradient opacity-80" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' }}>
          </div>
          {/* Logo Image */}
          <div className="relative z-10 w-full flex justify-center px-4">
            <img 
              src="/Logo_3.png" 
              alt="Suicide Line Logo" 
              className="w-full max-w-2xl object-contain drop-shadow-[0_0_15px_rgba(255,42,109,0.3)]" 
            />
          </div>
        </div>

        {/* Intro Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          {/* Character Silhouettes */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/Silhouette-The-Tools.png" 
              alt="The Tools Silhouettes" 
              className="w-full max-w-md object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
            />
          </div>
          
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-heading text-4xl md:text-5xl text-synth-pink synth-text-glow mb-4">SUICIDE LINE</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              บอร์ดเกมสไตล์ Synthwave ยุค 80s นำเสนอเกมรูปแบบสวมบทบาทผ่านตัวละครเอก ที่ได้รับมอบหมายนิรนามให้ไปกำจัดแก๊งมาเฟียที่เป็นองค์กรมืดอยู่เบื้องหลังเมืองแห่งนี้ มีเพียงความรุนแรงเท่านั้นที่จะนำไปสู่ความอยู่รอด
            </p>
            <button 
              onClick={() => setCurrentPage('gameplay')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-xl transition-colors shadow-[0_0_15px_rgba(220,38,38,0.6)]"
            >
              More Detail
            </button>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="w-full py-24 px-4 relative">
        {/* Background Image & Overlay with Top Fade */}
        <div 
          className="absolute inset-0"
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)'
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/Background-Story-in-Home-Page.jpg")' }}
          ></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-heading text-5xl md:text-6xl text-white/90 mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Story</h2>
          <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-md">
            <p>
              เมืองแห่งหนึ่งในยุค 80s ได้มีแก๊งมาเฟียที่เข้ามายึดและคอยกุมอำนาจเมืองแห่งนี้
              จนได้มีคนกลุ่มๆ หนึ่งซึ่งมีความแค้นต่อแก๊งมาเฟียที่เป็นปัญหาต่อประเทศชาติ
              จึงตั้งองค์กรลับขึ้นมาที่เรียกตนเองว่า ผู้มอบหมายนิรนาม
            </p>
            <p>
              พวกเขาได้คอยสืบค้น สอดส่อง มองหาคนที่มีศักยภาพพอที่จะทำให้เป้าหมายในการ
              กำจัดแก๊งมาเฟียนั้นสำเร็จ องค์กรนิรนามได้หาช่องทางในการติดต่อแบบลับๆ
              ไม่ว่าโทรไปหาโดยไม่แจ้งชื่อ จดหมายที่ไม่แจ้งผู้ส่ง หรือวิธีอื่นๆ ที่คาดไม่ถึง
            </p>
            <p>
              ทั้งหมดนี้ ก็เพื่อยุยงให้ผู้รับสารทำหน้าที่ของตนให้ลุล่วง
              และผู้รับสาร ก็ได้เป็น "เครื่องมือ" ในการก่อความรุนแรงครั้งนี้
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
