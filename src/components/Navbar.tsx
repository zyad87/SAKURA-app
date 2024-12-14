import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 absolute top-0 left-0 w-full bg-transparent z-20">
      {/* الشعار */}
      <div className="text-3xl font-bold text-white">S</div>

      {/* زر الهامبرغر للجوال */}
      {!isOpen && ( // إخفاء زر الهامبرغر إذا كانت القائمة مفتوحة
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#212121] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      {/* الروابط للشاشات الكبيرة */}
      <ul className="hidden md:flex space-x-16 text-xl font-medium text-[#212121]">
        <li>
          <a
            href="#gallery"
            className="hover:text-gray-100 transition-colors duration-300"
          >
            المصورين
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="hover:text-gray-100 transition-colors duration-300"
          >
            الأسعار
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:text-gray-100 transition-colors duration-300"
          >
            خدماتنا
          </a>
        </li>
        <li>
          <a
            href="#features"
            className="hover:text-gray-100 transition-colors duration-300"
          >
            الميزات
          </a>
        </li>
      </ul>

      {/* القائمة الخاصة بالجوال */}
      <div
        className={`fixed top-0 right-0 w-[85%] h-full bg-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        {/* زر الإغلاق */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 left-6 text-red-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col items-center justify-center space-y-8 h-[80%] text-2xl font-medium text-white">
          <li>
            <a
              href="#gallery"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              المصورين
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              الأسعار
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              خدماتنا
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              الميزات
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
