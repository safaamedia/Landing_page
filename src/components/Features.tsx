import React from "react"
import { useTranslation } from "react-i18next";
import vector3 from "../assets/Vector 3.png";
import image from "../assets/featuresbee.png";
import accuracy from "../assets/accuracy.png";
import installation from "../assets/installation.png";
import connectivity from "../assets/connectivity.png";
import bee from "../assets/bee.png";


const FeatureCard: React.FC<{ 
  title: string; 
  imageUrl: string; 
  description?: React.ReactNode;
  index: number;
  isLeft: boolean;
  isRTL?: boolean;
}> = ({ title, imageUrl, description, index, isLeft, isRTL = false }) => (
  <div 
    className={`group relative bg-gray-900 rounded-2xl px-4 py-5 w-[600px] h-[150px] text-center shadow-lg flex ${
      isRTL ? 'flex-row' : 'flex-row'
      } items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${
      isLeft ? 'justify-self-start' : 'justify-self-end'
      }`}>
    <div 
      className={`absolute -top-4 w-12 h-12 bg-ibee-yellow rounded-full flex items-center justify-center text-white font-bold text-xl z-20 animate-bounce ${
        isRTL ? '-right-4' : '-left-4'
        }`}>
      {index}
    </div>
    <div className="relative z-10 w-[130px] h-[130px] flex items-center justify-center">
      <div className="absolute inset-3 bg-ibee-yellow/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-20 object-contain relative z-10"/>
    </div>
    <div className="mt-4">
      <h3 
        className={`font-bold text-white text-2xl mb-2 ${
          isRTL ? 'text-right' : 'text-start'
          }`}>
            {title}
      </h3>
      {description && <div className="text-gray-400 text-sm text-justify">{description}</div>}
    </div>
  </div>
);

const Features: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      title: t('Precision and Accuracy'),
      imageUrl: accuracy,
      description: (
        <>
          {t('Our sensors provide highly accurate environmental')} <br /> {t('data with minimal error margin')}
        </>
      )
    },
    {
      title: t('Easy Installation'),
      imageUrl: installation,
      description: (
        <>
          {t('Designed for beekeepers, our sensors install in')} <br /> {t('minutes without special tools')}
        </>
      )
    },
    {
      title: t('Durable and Bee-Friendly Design'),
      imageUrl: bee,
      description: (
        <>
          {t('Weather-resistant materials that are safe for')} <br /> {t('bees and withstand harsh conditions')}
        </>
      )
    },
    {
      title: t('Wireless Connectivity'),
      imageUrl: connectivity,
      description: (
        <>
          {t('Seamless data transmission with long-range')} <br /> {t('connectivity and minimal power consumption')}
        </>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-100 overflow-hidden relative">
      {/* Background elements */}        
      <img
        src={vector3}
        alt="Background path"
        className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
      />
      <div className="container mx-auto px-6 relative">
        {/* Header section with monitoring system image */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text side */}
          <div className={isRTL ? 'order-1' : 'order-1'}>
            <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 -mt-2 md:-mt-4 ${isRTL ? 'mr-2 md:mr-4' : 'ml-2 md:ml-4'}`}>
                {t('O')}
              </span>
              <div>
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-ibee-yellow mt-2 md:mt-4 ${isRTL ? 'mr-2 text-right' : 'ml-2'}`}>
                  {t('ur Main Product: The SENSORS')}
                </h2>
              </div>
            </div>
            <br />
            <p className={`text-base leading-relaxed text-gray-600 mb-10 ${isRTL ? 'text-right mr-16 md:mr-20 lg:mr-24' : 'text-justify ml-16 md:ml-20 lg:ml-24'}`}>
              {t(
                "IBee sensors are specially designed. These sensors are engineered to provide precise and comprehensive data about your hive's environment. Here's what makes IBee sensors stand out:"
              )}
            </p>
          </div>

          {/* Image side */}
        <div className={`flex ${isRTL ? 'justify-start lg:justify-start order-2 pl-8' : 'justify-end lg:justify-end order-2 pr-8'}`}>
            <div className="relative max-w-md w-full">
                <div className="bg-ibee-yellow rounded-3xl shadow-lg w-64 transform duration-500 hover:translate-x-5 hover:-translate-y-5 pointer-events-none">
                <img
                    src={image}
                    alt="Smart Beehive Monitoring System"
                    className="w-64 h-auto rounded-3xl shadow-2xl transform duration-500 hover:-translate-x-10 hover:translate-y-10 pointer-events-auto"
                />
                </div>
            </div>
        </div>
    </div>

        {/* Feature cards grid - alternating layout */}
        <div className="grid grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              imageUrl={feature.imageUrl}
              description={feature.description}
              index={index + 1}
              isLeft={index % 2 === 0} // Even indices (0,2) = left, odd indices (1,3) = right
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Features;