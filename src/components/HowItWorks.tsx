import React from 'react';
import { Download } from 'lucide-react';
import { PencilLine } from 'lucide-react';
import { ArrowRightLeft } from 'lucide-react';
import { CirclePlay } from 'lucide-react';
import how from '../assets/how.png';
import { useTranslation } from 'react-i18next';



const HowItWorks: React.FC = () => {
    const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const steps = [
    {
      icon: <Download className="w-8 h-8 text-purple-500" />,
      bgColor: "bg-purple-100",
      title: t("Download IBee"),
      description: t("Start by downloading IBee app on your Android or IOS"),
    },
    {
      icon: <PencilLine className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-100",
      title: t("Create account"),
      description: t("Start creating a new account by filling the data needed"),
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-blue-100",
      title: t("Pair your Sensors"),
      description: t(
        "Pair your sensors with the app, simply by following the on-screen instructions"
      ),
    },
    {
      icon: <CirclePlay className="w-8 h-8 text-pink-500" />,
      bgColor: "bg-pink-100",
      title: t("Monitor The Hive remotely"),
      description: t(
        "Once the sensors are in place and connected to the app, you can start monitoring your hive's condition"
      ),
    },
  ];

    return (
    <section id="how-it-works" className="py-24 bg-ibee-yellow">
      <div className="container mx-auto px-6 text-center">
        <img
          src={how}
          alt="how it works"
          className="how mx-auto mb-12 animate-pulse"
        />
        <h2 className="text-5xl font-serif font-bold text-gray-900">
          {t("How IBEE Works")}
        </h2>
        <p
          className={`mt-4 max-w-2xl mx-auto text-gray-800 ${
            isRTL ? "text-right" : "text-justify"
          }`}
        >
          {t(
            "The Beehive Sensor Mobile App is a valuable tool for modern beekeeping, promoting sustainability, hive health, and honey production. By providing real-time data"
          )}
        </p>

    <div className="mt-8 bg-white/70 backdrop-blur-sm px-4 py-8 md:px-6 md:py-12 rounded-2xl shadow-lg">
          <div
            className={`grid grid-cols-2 md:grid-cols-2 gap-6 w-[1060px] h-[112px] mx-auto ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start">
                <div
                  className={`howitworks-icon w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    step.bgColor
                  } ${isRTL ? "absolute right-0 top-0" : "mr-4"}`}
                >
                  {step.icon}
                </div>
                <div
                  className={`flex-1 ${
                    isRTL ? "pr-14 text-right" : "text-left"
                  }`}
                >
                  <h3
                    className={`text-base font-bold text-gray-900 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 text-gray-600 text-xs ${
                      isRTL ? "text-right" : "text-justify"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
