import React, { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import image from "../assets/Image 1.jpg";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
      const { t, i18n } = useTranslation();
      const [isVisible, setIsVisible] = useState(false);
      const imageRef = useRef(null);
      const isRTL = i18n.language === "ar";

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
          },
          { 
            threshold: 0.3,
            rootMargin: "-50px 0px -50px 0px"
          }
        );

        if (imageRef.current) {
          observer.observe(imageRef.current);
        }

        return () => {
          if (imageRef.current) {
            observer.unobserve(imageRef.current);
          }
        };
      }, []);


  return (
    <section id="home" className="bg-gray-50 py-20 min-h-screen">
      <div className="container mx-auto px-5">
        <div className={`grid grid-cols-2 gap-12 items-start ${isRTL ? "grid-cols-2" : ''}`}>
          {/* Text side */}
          <div className={`max-w-3xl ${isRTL ? "order-1 text-right" : "order-1"}`}>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-8 text-gray-900 animate-flicker">
              {t("IBee Smart Beehive Monitoring at your FingerTips")}
            </h1>
            <p className={`text-base leading-relaxed text-gray-600 mb-10 ${isRTL ? "text-right" : "text-justify"}`}>
              {t("The Beehive Sensor Mobile App is a cutting-edge solution designed to enhance the management and monitoring of beehives. This innovative application empowers beekeepers and enthusiasts by offering real-time data insights into the conditions within the beehive, including temperature, humidity and the hive weight")}
            </p>
            <form className={`flex flex-col md:flex-row max-w-md ${isRTL ? "md:flex-row-reverse" : ""}`}>
              <div className="relative">
                <Mail className={`absolute top-4 w-5 h-5 text-gray-700 z-10 ${isRTL ? "right-5" : "left-5"}`} />
                <input
                  type="email"
                  placeholder={t("Enter your Email")}
                  className={`bg-gray-300 w-full pr-4 py-4 border-2 border-gray-300 rounded-lg text-base outline-none focus:border-yellow-400 transition-colors ${isRTL ? "pr-12 pl-4 text-right" : "pl-16"}`}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-gray-900 text-white py-4 px-6 rounded-lg text-base font-semibold cursor-pointer hover:bg-gray-700 transition-colors"
              >
                {t("Get Started")}
              </button>
            </form>
          </div>

          {/* Image side */}
          <div className={`relative flex justify-center items-start ${isRTL ? "order-2" : "order-2"}`}>
            {/* Yellow accent shape */}
            <div 
              className="absolute w-80 h-80 bg-ibee-yellow z-0"
              style={{
                [isRTL ? "left" : "right"]: '-25px',
                top: "70%",
                transform: "skew(0deg, 10.5deg)",
                borderRadius: "10% 10% 10% 10%"
              }}
            ></div>
            
            {/* Image container */}
            <div 
              ref={imageRef}
              className={`relative z-10 lg:justify-start ${
                isVisible ? "animate-slideinright" : "opacity-0 translate-x-12"
              } transition-all duration-700`}
            >
              <img
                src={image}
                alt="Smart Beehive Monitoring System"
                className="w-80 h-80 rounded-3xl shadow-2xl object-cover"
                style={{ transform: "skew(0deg, 10.5deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
