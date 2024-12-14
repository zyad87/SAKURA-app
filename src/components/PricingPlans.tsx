import React from "react";

const PricingPlans: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-8">
        {/* العنوان */}
        <h2 className="text-4xl font-bold mb-4 text-[#212121]">
          الأسعار وخطط الاشتراك
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          باقات مختلفة تساعدك في الوصول لأهدافك
        </p>

        {/* الشبكة */}
        <div className="flex flex-wrap justify-center gap-6"> {/* تقليل المسافة بين الكروت */}
          {/* الخطة الأساسية */}
          <div className="p-8 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between h-[460px] w-[320px] mt-5">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-500 uppercase">
                Basic
              </h3>
              <div className="flex items-baseline justify-center space-x-2">
                <span className="text-lg font-medium text-gray-500">ريال</span>
                <p className="text-5xl font-bold text-[#212121]">99</p>
              </div>
              <ul className="text-gray-600 py-8 space-y-2"> {/* مميزات الباقة مع py-8 */}
                <li>محتوى رئيسي</li>
                <li>استشارة لمدة ساعة </li>
              </ul>
            </div>
            <button className="bg-black text-white px-6 py-3 w-full rounded-md hover:bg-gray-800 transition-colors duration-300">
              اشترك
            </button>
          </div>

          {/* الخطة القياسية */}
          <div className="p-8 bg-[#212121] text-white rounded-lg shadow-lg flex flex-col items-center justify-between h-[500px] w-[350px] transform scale-105">
            <div className="text-center space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-wider">Standard</h3>
              <div className="flex items-baseline justify-center space-x-1">
                <span className="text-sm font-medium">ريال</span>
                <p className="text-6xl font-bold">199</p> {/* جعل السعر أكبر */}
              </div>
              {/* مميزات الباقة */}
              <ul className="text-sm space-y-2 leading-relaxed py-8">
                <li>محتوى رئيسي</li>
                <li>3 مكالمات لايف روم</li>
                <li>استشارة لمدة ساعة مرة في الشهر</li>
              </ul>
            </div>

            {/* الزر */}
            <button className="bg-[#B68B3E] text-white px-8 py-4 w-full rounded-md hover:bg-[#A67A2C] transition-colors duration-300">
              اشترك
            </button>
          </div>

          {/* الخطة المميزة */}
          <div className="p-8 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between h-[460px] w-[320px] mt-5">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-500 uppercase">
                Premium
              </h3>
              <div className="flex items-baseline justify-center space-x-2">
                <span className="text-lg font-medium text-gray-500">ريال</span>
                <p className="text-5xl font-bold text-[#212121]">299</p>
              </div>
              <ul className="text-gray-600 py-8 space-y-2"> {/* مميزات الباقة مع py-8 */}
                <li>محتوى كامل متاح</li>
                <li>مكالمة لايف روم متكاملة</li>
                <li>استشارة لمدة ساعة أسبوعياً</li>
              </ul>
            </div>
            <button className="bg-black text-white px-6 py-3 w-full rounded-md hover:bg-gray-800 transition-colors duration-300">
              اشترك
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
