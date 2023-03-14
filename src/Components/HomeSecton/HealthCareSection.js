import React from 'react';
import Feature1 from "../../assets/Feature/1.jpg";
import { ReactComponent as Check } from "../../assets/icons/Check.svg";
import useTheme from '../../utils/Theme/CustomTheme';
import person2 from "../../assets/Doctors/person-2.png";

const HealthCareSection = () => {
    const { color } = useTheme();
    return (
        <div className="w-screen  hero min-h-screen">
            <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
                <img src={Feature1} alt="Doctor" className="max-w-screen-sm rounded-lg " />
                <div className=''>
                    <span className='p-2 text-md text-color-primary bg-color-light leading-8 rounded-md'> HEALTH & CARE</span> <br /> <br />
                    <h1 className="text-5xl font-bold">We Give You The Perfect Smile You Wanted</h1>
                    <p className="py-6 text-xl"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    <br />
                    <ul className='text-lg'>
                        <li className='my-2 flex gap-3'>
                            <Check width={24} height={24} fill={color.primary} />
                            <span>Mauris mattis lectus eget ligula dapibus, ac maximus ipsum</span>
                        </li>
                        <li className='my-2 flex gap-3'>
                            <Check width={24} height={24} fill={color.primary} />
                            <span>Aenean facilisis erat et metus semper molestie sem posuere</span>
                        </li>
                        <li className='my-2 flex gap-3'>
                            <Check width={24} height={24} fill={color.primary} />
                            <span>
                                Donec sit amet lorem non mi fringilla finibus pretium vel ante</span>
                        </li>
                    </ul>
                    <br />
                    <hr />
                    <div className='mt-12 '>
                        <div className='flex gap-8 justify-start items-center'>
                            <img className='w-24' src={person2} alt="" />
                            <div>
                                <p className='text-2xl'>+880-0123-456789</p>
                                <p className='text-color-primary'>Do you have any question?</p>
                            </div>
                        </div>
                        <button className="btn mt-4 border-none rounded-sm bg-color-primary text-white">Red More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthCareSection;