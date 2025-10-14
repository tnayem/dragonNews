import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../../layouts/HomeLayout/FindUs';
import QZone from '../../layouts/HomeLayout/QZone';

const RightAside = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;