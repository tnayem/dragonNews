import React, { use } from 'react';
const categoriesPromiss = fetch('/categories.json').then(res=>res.json())

const Categories = () => {
    const categories = use(categoriesPromiss)
    console.log(categories);
    return (
        <div>
            <h2 className='font-bold'>All Categories {categories.length}</h2>
        </div>
    );
};

export default Categories;