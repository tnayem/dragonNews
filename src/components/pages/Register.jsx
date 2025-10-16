import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister=(e)=>{
        e.preventDefault()
        console.log("Submited")
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-center font-semibold text-2xl'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* name */}
                        <label className="label">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter Your Name" />
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoURL' className="input" placeholder="Enter Photo URL" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        {/* password */}

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='text-center py-3'>Have An Account ? <Link className='text-[#F75B5F]' to="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;