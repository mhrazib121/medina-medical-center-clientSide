import React from 'react';
import HealthCareSection from '../Components/HomeSecton/HealthCareSection';
import TopBanner from '../Components/HomeSecton/TopBanner';
import Services from '../Components/Services/services';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <HealthCareSection />
            <Services />
        </div>
    );
};

export default Home;