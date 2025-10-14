import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../../layouts/HomeLayout/FindUs';

const RightAside = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightAside;