import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16">
      <div className="container m-28  mx-auto text-right sm:mx-auto">
        {/* العنوان */}
        <h2 className="text-3xl sm:text-4xl md:text-[64px] leading-[1.2] pb-8 tracking-[-0.02em] text-[#212121] font-arabic">
          <span className="font-normal">من </span>
          <span className="font-bold">نحن</span>
          <span className="font-normal">؟</span>
        </h2>

        {/* النص */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-full md:max-w-3xl ml-auto">
          بعد أشهر من العمل الجاد والتخطيط، أطلقت <strong>ساكورا</strong> في البداية كموقع بسيط يتيح للمصورين عرض أعمالهم
          ومشاركة تجاربهم. سرعان ما لاقت المنصة إقبالاً واسعاً من المصورين الذين وجدوا فيها المكان المثالي للتواصل والنمو.
          <br />
          مع مرور الوقت، تطورت <strong>ساكورا</strong> لتشمل خدمات متنوعة، مثل أدوات التحرير المتقدمة، الدروس التعليمية، والسباقات
          الدورية. أصبحت المنصة وجهة رئيسية للمصورين الذين يبحثون عن بيئة محفزة تدعم طموحاتهم الفنية.
          <br />
          اليوم، تفخر <strong>ساكورا</strong> بأنها موطن للإبداع، ومكان يتواصل المصورون فيه من مختلف أنحاء العالم، لتحقيق
          الابتكار والتطوير المستمر. ما بدأ كحلم صغير في ذهن مجموعة من الأصدقاء، تحول إلى منصة رائدة تجمع بين
          <br /> الشغف، الإبداع، والتعاون 
        </p>
      </div>
    </section>
  );
};

export default About;
