import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#212121] text-white py-4 overflow-hidden">
      {/* القسم الرئيسي */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* المحتوى */}
        <div className="lg:col-span-7 text-center lg:text-right space-y-6 px-4 order-2 lg:order-1">
            
        <h2 className="text-2xl md:text-4xl">
            لماذا تختار <span className="font-bold">ساكورا؟</span>
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-center lg:justify-end">
              <p className="text-sm md:text-lg">فرص لا تُفوَّت</p>
              <div className="border-l-2 border-[#B68B3E] h-6 ml-4"></div>
            </li>
            <li className="flex items-center justify-center lg:justify-end">
              <p className="text-sm md:text-lg">أدوات متقدمة</p>
              <div className="border-l-2 border-[#B68B3E] h-6 ml-4"></div>
            </li>
            <li className="flex items-center justify-center lg:justify-end">
              <p className="text-sm md:text-lg">مجتمع داعم</p>
              <div className="border-l-2 border-[#B68B3E] h-6 ml-4"></div>
            </li>
          </ul>
        </div>

        {/* الصورة */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2">
          <div
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden"
            style={{
                transform: "translateX(50%)", // تحريك الصورة إلى اليمين
                marginRight: "-20%", // جعل نصف الصورة خارج الحاوية           
                 }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/6383/b647/03c7b4a54189ebf3d001a03c7bd3ae4e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jf~W~rcZ8iatWPC~Q2m4FrXYk74zBvBJVht~jdq7Q-PySrPehfVFsx7Nt2M5pY18vMGE9lDckId-3rJl9QO6km0CR6juVCR3J4NzZ66Gv2H6frfRnSuGcj0aSD4vaHwdLTkmYI5lylHwGHouEcFaTNmm3P73mjSC~6SJVARyvOLib5vefkT~jYwh9gUMop0JTrfI2Xx1aNNLK0teWiy-QDCSwSn2CyaA36dcww4d9xUIGeFv9wsTLEfGnKWHc95wEQwo3RQppGQaA4kjMjLDzlL8igpT0GLbqmuhbSX~Gi5k8g-6R9kxJeue-yD4ggSqf7W8WdC1EVH1Ls4aufHuww__"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* الفوتر السفلي */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-8 border-t border-gray-600 pt-4 px-4 space-y-4 md:space-y-0">
        {/* النصوص */}
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            © 2024 جميع الحقوق محفوظة لمنصة ساكورا
          </p>
        </div>

        {/* الروابط */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 space-x-reverse text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition duration-300">
            من نحن؟
          </a>
          <a
            href="#terms"
            className="hover:text-white transition duration-300 px-2"
          >
            الشروط والأحكام
          </a>
          <a
            href="#support"
            className="hover:text-white transition duration-300"
          >
            الدعم الفني
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
