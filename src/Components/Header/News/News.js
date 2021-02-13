import './News.css';
import React from 'react'

import {newsData} from '../../../newsTestData';
import NewsItem from './NewsItem';
const News = () => {
	return (
		<div className='newsrow'>
			{newsData.map((item)=>(
				<NewsItem 
					featuredImage={item.featuredImage}
					description={item.description}
					key={item.newsId}
					newsId={item.newsId}
					publishedAt={item.publishedAt}
					className='newsrow__item'
				/>
			))}
		</div>
	)
}

export default News;
