import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center py-2 my-2 bg-base-200'>
            <p className='bg-[#D72050] text-white py-1 px-3'>Latest</p>
            <Marquee className='flex gap-10' pauseOnHover={true}>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, porro.</p>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, porro.</p>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, porro.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;