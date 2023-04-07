import React, { useMemo } from 'react';
import { CiStethoscope, CiVirus, CiTablets1 } from "react-icons/ci";
import { FaTooth } from "react-icons/fa";
import { ImEyePlus } from "react-icons/im";
import { TbHeartbeat } from "react-icons/tb";

const Services = () => {
    const demoData = useMemo(() => {
        const useData = [
            {
                id: " 01",
                title: "Therapiya",
                describe: "Sirius WordPress Theme features a slick and clean design that is suitable for virtually any type of website",
                icon: <CiStethoscope />
            },
            {
                id: " 02",
                title: "Pharmocology",
                describe: "Sirius WordPress Theme features a slick and clean design that is suitable for virtually any type of website",
                icon: <CiTablets1 />
            },
            {
                id: " 03",
                title: "Dentistry",
                describe: "Sirius WordPress Theme features a slick and clean design that is suitable for virtually any type of website",
                icon: <FaTooth />
            },
            {
                id: " 04",
                title: "Cardiology",
                describe: "Sirius WordPress Theme features a slick and clean design that is suitable for virtually any type of website",
                icon: <TbHeartbeat />
            },
            {
                id: " 05",
                title: "Virusology",
                describe: "Sirius WordPress Theme features a slick and clean design that is suitable for virtually any type of website",
                icon: <CiVirus />
            },
            {
                id: " 06",
                title: "Eye Surgery",
                describe: "Sirius WordPress Theme features a slick and clean design that is suitable for virtually any type of website",
                icon: <ImEyePlus />
            }
        ]
        return useData;
    }, []);

    return (
        <div className='mt-20'>
            <h1 className='text-center text-5xl font-bold'>Our Services</h1>

            <div className='w-100 lg:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 mt-12'>
                {demoData.map((data) =>
                    <div key={data.id} className='flex items-center gap-6 m-4'>
                        <div className=' text-cyan-500 text-6xl hover:text-black
                        p-2 hover:bg-cyan-100 hover:rounded-md transition delay-150'>
                            {data.icon}
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold'>{data.title}</h3>
                            <p className='w-4/5'>{data.describe}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;