import React from 'react';
import logo from '../assets/white-ibee.png';
import { Download } from 'lucide-react';
import apple from '../assets/apple.png'; 
import google from '../assets/playstore.png';
import { Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const Footer: React.FC = () => {

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <footer className="bg-ibee-yellow">
      <div className="container mx-auto px-6 py-12">
        {/* CTA Section */}
        <div className="bg-ibee-yellow rounded-3xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-900 text-white rounded-full p-4 animate-bounce">
              <Download className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("Download IBee")} <br /> {t("and keep your Bees thriving")}
          </h2>
          <div
            className={`mt-8 flex flex-row sm:flex-row justify-center items-center gap-4 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <button className="bg-gray-100/70 hover:bg-white hover:-translate-x-4 transform transition-all duration-300 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center space-x-3 w-48">
              <img src={apple} alt="apple logo" className="icon" />
              <div>
                <p className={`text-xs ${isRTL ? "text-right" : "text-left"}`}>
                  {t("Available on the")}
                </p>
                <p
                  className={`font-semibold text-lg -mt-1 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("App Store")}
                </p>
              </div>
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 hover:translate-x-4 transform transition-all duration-300 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-3 w-48">
              <img src={google} alt="google play logo" className="icon" />
              <div>
                <p className={`text-xs ${isRTL ? "text-right" : "text-left"}`}>
                  {t("Get it on")}
                </p>
                <p
                  className={`font-semibold text-lg -mt-1 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("Google Play")}
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-8 relative h-64">
          {/* Grid with 3 zones */}
          <div className="grid grid-cols-[auto_1fr_auto] gap-8 h-full">
            {/* Left: Logo (left center, vertically centered) */}
            <div
              className={`flex items-center ${
                isRTL ? "justify-end" : "justify-start"
              }`}
            >
              <div className="logo-shadow flex items-center justify-center p-4 w-[180px] h-[145px]">
                <img src={logo} alt="iBee Logo" className="logo" />
              </div>
            </div>

            {/* Center: Paragraph (top-center) */}
            <div className="flex justify-center items-center flex-1">
              <p
                className={`text-white text-xs max-w-xl text-center ${
                  isRTL ? "text-right" : "text-justify"
                }`}
              >
                {t(
                  "Empowering Beekeepers with Smart Hive Insights - Your Comprehensive Beehive Monitoring Companion for optimal hive health, honey production, and Sustainability"
                )}
              </p>
</div>

      {/* Right: Follow us + Call us (bottom-right, vertically centered) */}
            <div
              className={`flex items-center gap-16 text-sm ${
                isRTL ? "justify-start flex-row-reverse" : "justify-end"
              }`}
            >
              <div>
                <h4 className="font-bold mb-2">{t("Follow Us")}</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white">
                    <Facebook />
                  </a>
                  <a href="#" className="text-white">
                    <Instagram />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">{t("Call Us")}</h4>
                <p
                  className="text-white"
                  dir="ltr"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  +212 528 227 813
                </p>
              </div>
            </div>
          </div>

     <div className="absolute bottom-0 left-0 w-full">
            <hr className="my-6 border-gray-800" />
            <p className="text-center text-white text-xs">
              © 2025 {t("All rights Reserved to AGRI 4.0")}
            </p>
          </div>
        </div>
      </div>
</footer>
  );
};

export default Footer;
