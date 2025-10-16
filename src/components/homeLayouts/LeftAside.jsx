import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';
import { AuthContext } from '../../provider/AuthContext';

const LeftAside = () => {
    
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;