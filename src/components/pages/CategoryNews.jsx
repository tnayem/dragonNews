import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [catagoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data)
            return;
        }
        else if (id == "1") {
            const newsData = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(newsData);
        }
        else {
            const newsData = data.filter(news => news.category_id == id)
            // console.log(newsData);
            setCategoryNews(newsData)
        }

    }, [id, data])
    return (
        <div>
            <h1>Total News: {catagoryNews.length}</h1>
            <div className='grid grid-cols-1 gap-5'>
            {
                catagoryNews?.map(singleNews=><NewsCard singleNews={singleNews}></NewsCard>)
            }
        </div>
        </div>
    );
};

export default CategoryNews;