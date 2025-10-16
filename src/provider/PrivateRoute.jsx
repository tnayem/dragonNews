import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate} from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    if(loading){
        return <div className='flex items-center justify-center min-h-screen'><span className="loading loading-bars loading-xl"></span></div>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;