import './News.css';
import React, { useEffect } from 'react'


import NewsItem from './NewsItem';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../../Redux/actions/newsActions';
const News = () => {
	const dispatch = useDispatch()
	const { loading, articles } = useSelector(state => state.data)

	useEffect(() => {

		return () => {
			dispatch(getNews());
		}
	}, [dispatch])
	return (
		<div>
			{
				loading ? < h1 > Loading News / articles </h1> : (
					<div className='newsrow'>
						{articles.map((item) => (
							<NewsItem
								featuredImage={item.imageUrl}
								description={item.title}
								key={item.newsId}
								newsId={item.newsId}
								publishedAt={item.createdAt}
								owner={item.createdBy}
								className='newsrow__item'
							/>
						))}
					</div>
				)
}
		</div >
	)
}

export default News;
