import './MediaBody.css';
import React, { useEffect } from 'react';

import { newsData } from '../../newsTestData';
import NewsItem from '../../Components/Header/News/NewsItem';
import Documents from '../../Components/Header/Documents/Documents';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../Redux/actions/newsActions';

const MediaBody = () => {
	const dispatch = useDispatch();
	const { articles, loading } = useSelector(state => state.data)

	useEffect(() => {
		dispatch(getNews());
		return () => {

		}
	}, [])
	return (
		<div className='mediabody'>
			<div className='mediabody__news'>
				<h1>News and Press Releases</h1>
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

			<div className='mediabody__documents'>
				<h1>Published Documents</h1>
				<Documents />
			</div>
		</div>
	)
}

export default MediaBody
