import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation} from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation()
    console.log(location);
    if(loading){
        return <div className='flex items-center justify-center min-h-screen'><span className="loading loading-bars loading-xl"></span></div>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;