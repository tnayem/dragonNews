
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import RightAside from '../homeLayouts/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const[news,setNews]= useState({})
    useEffect(()=>{
        const newsDetails = data.find(sigleNews=>sigleNews.id == id)
        setNews(newsDetails);
    },[])
    return (
        <div>
            <header className='py-6'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>Dragon News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;