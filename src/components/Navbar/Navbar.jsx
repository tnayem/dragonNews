import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../../assets/user.png'
import { AuthContext } from '../../provider/AuthContext';

const Navbar = () => {
    const {user,logOutUser} = use(AuthContext)
    const handleLogOut = () =>{
       logOutUser()
       .then()
       .catch(error=>{
        console.log(error);
       })
    }
    return (
        <div className='flex justify-between'>
           <div></div>
           <div className='nav flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
           </div>
           <div className='login-btn flex gap-2 items-center'>
            <img src={userImg} alt="" />
            {
                user?<Link onClick={handleLogOut} className='btn bg-[#706F6F] text-white px-10'>LogOut</Link>:<Link to='/auth/login' className='btn bg-[#706F6F] text-white px-10'>Login</Link>
            }
            
           </div>
        </div>
    );
};

export default Navbar;