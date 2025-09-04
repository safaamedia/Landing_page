import React from 'react';
import logo from '../assets/white-ibee.png';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import { useState } from 'react';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === "ar";
  
  // Fixed handleChangeLng function
  const handleChangeLng = async (lng: string) => {
    try {
      console.log('Attempting to change language to:', lng);
      console.log('Current language before change:', i18n.language);
      
      await i18n.changeLanguage(lng);
      
      console.log('Language after change:', i18n.language);
      console.log('localStorage lng:', localStorage.getItem("lng"));
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  // Function to get current language display
  const getCurrentLanguageDisplay = () => {
    const currentLang = i18n.language;
    console.log('Rendering with current language:', currentLang);
    
    switch (currentLang) {
      case 'en':
        return "English";
      case 'fr':
        return "Français";
      case 'ar':
        return "العربية";
      default:
        return "English";
    }
  };

  return (
    <header className="bg-white py-5 shadow-lg">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start">
            <img src={logo} alt="iBee Logo" className="logo" />
          </div>
          
          {/* Navigation with proper translation keys */}
          <nav className="flex gap-12">
            <a href="#home" className="text-gray-900 font-medium hover:text-yellow-500 transition-colors">
              {t('Home')}
            </a>
            <a href="#about" className="text-gray-900 font-medium hover:text-yellow-500 transition-colors">
              {t('About')}
            </a>
            <a href="#features" className="text-gray-900 font-medium hover:text-yellow-500 transition-colors">
              {t('Features')}
            </a>
            <a href="#how-it-works" className="text-gray-900 font-medium hover:text-yellow-500 transition-colors">
              {t('How it works')}
            </a>
          </nav>
          
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="pl-6 pr-2 py-[2px] rounded-lg bg-ibee-yellow hover:bg-tit-100 text-lg font-semibold hover:text-white lg:mr-10 flex items-center"
            >
              {getCurrentLanguageDisplay()}
              < ChevronDown 
                className="h-6 w-6 ml-2 pt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </ChevronDown>
            </button>
            
            {isOpen && (
              <div className={`fixed top-[70px] z-20 flex flex-col p-4 h-fit min-w-60 bg-[rgb(40,40,40)] rounded-2xl" ${isRTL ? 'left-5' : 'right-5'}`}>
                <button
                  className="py-2 px-12 m-1 bg-ibee-yellow text-sm font-semibold rounded-lg text-bee-100 pb-2 border-b-2 border-solid border-bee-100"
                  onClick={() => {
                    handleChangeLng("en");
                    setIsOpen(false);
                  }}
                >
                  English
                </button>
                <button
                  className="py-2 px-12 m-1 bg-ibee-yellow text-sm font-semibold rounded-lg text-bee-100 pb-2 border-b-2 border-solid border-bee-100"
                  onClick={() => {
                    handleChangeLng("fr");
                    setIsOpen(false);
                  }}
                >
                  Français
                </button>
                <button
                  className="py-2 px-12 m-1 bg-ibee-yellow text-sm font-semibold rounded-lg text-bee-100 pb-2 border-b-2 border-solid border-bee-100"
                  onClick={() => {
                    handleChangeLng("ar");
                    setIsOpen(false);
                  }}
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;