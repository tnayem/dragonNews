import React, { Suspense, useContext } from 'react';
import Categories from '../Categories/Categories';
import { AuthContext } from '../../provider/AuthContext';

const LeftAside = () => {
    const {userEmail} = useContext(AuthContext)
    console.log(userEmail);
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;