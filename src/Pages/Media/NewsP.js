import './NewsP.css'
import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Header/Footer/Footer';
import Banner from '../../Components/Header/Banner/Banner';
import NewsItem from '../../Components/Header/News/NewsItem';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../Redux/actions/newsActions';


const NewsP = () => {
	const dispatch = useDispatch();
	const { articles, loading } = useSelector(state => state.data)
	
	useEffect(() => {
		dispatch(getNews());
		return () => {

		}
	}, [])
	return (
		<div className = 'NewsP'>
			<Header />
			<Banner title='News / Press Releases' image='/assets/imgs/study.jpg' />
			<h1>News and Press Releases</h1>
			<div className='NewsP__details'>
				
				{
					loading ? <h1>Loading articles ...</h1> : (

						articles.map(item => (
							<NewsItem
								featuredImage={item.imageUrl}
								description={item.title}
								key={item.newsId}
								newsId={item.newsId}
								publishedAt={item.createdAt}
								owner={item.createdBy}
								className='newsrow__item'
							/>
						))

					)
				}
			</div>
			<Footer />
		</div>
	)
}

export default NewsP;
