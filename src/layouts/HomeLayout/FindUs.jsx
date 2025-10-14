import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from 'react-icons/io';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start join-item"><FaFacebookF /> Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item"> <IoLogoTwitter />Twiter</button>
                    <button className="btn bg-base-100 justify-start join-item"><FaInstagram /> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;