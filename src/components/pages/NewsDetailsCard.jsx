import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className='btn bg-[#D72050] text-white' to={`/category/${news.category_id}`}>Back to category</Link>
        </div>
    );
};

export default NewsDetailsCard;