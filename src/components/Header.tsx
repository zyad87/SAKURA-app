import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "../assets/Hero.png";
import "aos/dist/aos.css";
import AOS from "aos";

const Header: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنميشن بالمللي ثانية
      easing: "ease-in-out", // نوع التأثير
      once: true, // الأنميشن يحدث مرة واحدة فقط عند التمرير
    });
  }, []);

  return (
    <header className="relative bg-gray-900 text-gray-900 h-[90vh] flex items-center justify-end px-4 md:px-8">
      {/* صورة الخلفية */}
      <div className="absolute inset-0">
        <img
          src={Hero} // ضع هنا رابط الصورة
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* الناف بار */}
      <Navbar />

      {/* المحتوى */}
      <div
        className="relative z-10 text-right max-w-2xl"
        data-aos="fade-up" // تأثير AOS
      >
        <h1
          className="text-[48px] md:text-[72px] lg:text-[128px] font-arabic font-bold tracking-[-0.025em] text-right text-[#212121]"
          data-aos="fade-down" // تأثير آخر لـ AOS
        >
          ساكورا
        </h1>
        <p
          className="text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-[36px] text-[#212121] text-right font-arabic my-6 md:my-8"
          data-aos="fade-up"
        >
          وجهتك الأولى للإبداع والتواصل مع مجتمع المصورين المحترفين<br /> والهواة
          على حدٍ سواء. نحن هنا لنقدم لك كل ما تحتاجه لتنمية
          <br /> مهاراتك، تحسين أعمالك، وتسويق إبداعاتك
        </p>

        <button
          className="bg-[#212121] text-white px-6 py-3 w-full md:w-60 rounded-full hover:bg-gray-950 transition-colors duration-300"
          data-aos="zoom-in"
        >
          اشترك معنا
        </button>
      </div>
    </header>
  );
};

export default Header;
