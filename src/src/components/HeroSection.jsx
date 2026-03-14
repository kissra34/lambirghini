import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* خلفية الفيديو - الأداء العالي */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://custom-video-url.mp4" type="video/mp4" />
      </video>

      {/* الطبقة الضوئية (Overlay) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* المحتوى النصي بتصميم الحد الأدنى (Minimalist) */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 animate-fade-in">
          REVUELTO
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-8 opacity-80">
          Beyond the Concrete
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-500 uppercase text-sm font-bold">
            اكتشف الموديل
          </button>
        </div>
      </div>

      {/* مؤشر التمرير السفلي */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
