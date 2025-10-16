import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    const { logIn } = use(AuthContext)
    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(`${location.state?location.state:"/"}`)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-center font-semibold text-2xl'>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-center py-3'>Dont’t Have An Account ? <Link className='text-[#F75B5F]' to="/auth/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;