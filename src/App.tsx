import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App = () => { 
    const { i18n } = useTranslation();
  
  useEffect(() => {
    // Set document direction based on language
    const isRTL = i18n.language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const isRTL = i18n.language === 'ar';

  return (
    <div className={`bg-gray-100 font-sans  ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      <main>
        <Home />
        <HowItWorks />
        <Features />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
