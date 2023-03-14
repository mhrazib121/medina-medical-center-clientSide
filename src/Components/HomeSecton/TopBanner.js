import React from 'react';
import doctor1 from "../../assets/Doctors/png-3-1.png";
import "./TopBanner.css"

const TopBanner = () => {
    return (
        <div className="w-screen  hero min-h-screen banner-bg">
            <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
                <img src={doctor1} alt="Doctor" className="max-w-full rounded-lg " />
                <div className='text-white'>
                    <h1 className="text-5xl font-bold "> <span className='text-3xl text-color-primary'>Helping you,</span><br /> Stay happy one!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn mt-4 border-none rounded-sm bg-color-primary text-white">Get start</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;