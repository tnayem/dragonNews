import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
    console.log(catagoryNews);
    return (
        <div>
            Category News {catagoryNews.length}
        </div>
    );
};

export default CategoryNews;