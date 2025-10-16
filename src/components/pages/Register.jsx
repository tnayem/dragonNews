import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';

const Register = () => {
    const {registeredUser,setUser} = use(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        // const name = e.target.name.value;
        // const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const userInfo = {name,photoURL,email,password}
        
        registeredUser(email,password)
        .then(result=>{
            const user=result.user
            setUser(user)
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-center font-semibold text-2xl'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* name */}
                        <label className="label">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter Your Name" required />
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoURL' className="input" placeholder="Enter Photo URL" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        {/* password */}

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='text-center py-3'>Have An Account ? <Link className='text-[#F75B5F]' to="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;