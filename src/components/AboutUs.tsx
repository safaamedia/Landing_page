import React from 'react';
import { useTranslation } from 'react-i18next';
import { DatabaseBackup, ChartLine, HardDrive, Wifi, BellRing, Blocks, History, User} from 'lucide-react';

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => (
    <div className="feature-icon-item flex flex-col items-center text-center w-64 h-40">
        <div className="feature-icon-wrapper bg-gray-200/50 p-3 rounded-xl center flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="mt-2 font-semibold text-gray-800 center">{title}</h3>
    </div>
);

const AboutUs: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    // Now you can use t() in the features array
    const features = [
        { icon: <DatabaseBackup size={52} color="#7094ff"/>, title: t('Secure Data Storage') },
        { icon: <BellRing size={52} color="#b870ff" />, title: t('Alerts & Notifications') },
        { icon: <ChartLine size={52} color="#ff7070" />, title: t('Graphical Visualization') },
        { icon: <User size={52} color="#70ff81" />, title: t('User-Friendly Interface') },
        { icon: <HardDrive size={52} color="#70ff81" />, title: t('Real-time Data') },
        { icon: <Blocks size={52} color="#ff7070" />, title: t('Sensor integration') },
        { icon: <Wifi size={52} color="#b870ff" />, title: t('Remote Access') },
        { icon: <History size={52} color="#7094ff" />, title: t('Historical Data') },
    ];
    

    return (
        <section id="about" className="py-24 bg-gray-100 relative overflow-hidden">
            <div className={`absolute -bottom-24 w-72 h-72 bg-ibee-yellow rounded-full -z-0 ${isRTL ? '-left-24' : '-right-24'}`}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-row md:flex-row items-center gap-12">
                    <div className={`md:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-8 ${isRTL ? 'order-2' : 'order-1'}`}>
                        {features.map((feature, index) => (
                             <FeatureItem key={index} icon={feature.icon} title={feature.title} />
                        ))}
                    </div>
                    <div className={`md:w-1/2 text-center md:text-left ${isRTL ? 'order-1 md:text-right' : 'order-2'}`}>
                        <h2 className="text-7xl font-serif font-bold text-gray-900 leading-snug">
                            {t('Why')}  <br /> {t('choose')} <span className="text-ibee-yellow"> <br /> {t('IBee')}</span><span className="animate-bounce inline-block">{t('?')}</span>
                        </h2>
                        <p className={`text-base mt-6 text-gray-600 max-w-auto mx-auto md:mx-0 ${isRTL ? 'text-right' : 'text-justify'}`}>
                             {t('The Beehive Sensor Mobile app is a cutting-edge solution designed to enhance the management and monitoring of beehives.')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;