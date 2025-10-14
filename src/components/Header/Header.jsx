import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex items-center flex-col gap-2'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),"EEEE, MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;