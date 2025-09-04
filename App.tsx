
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-gray-100 font-sans">
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
