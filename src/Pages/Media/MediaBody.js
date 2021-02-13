import './MediaBody.css';
import React from 'react';

import {newsData} from '../../newsTestData';
import NewsItem from '../../Components/Header/News/NewsItem';
import Documents from '../../Components/Header/Documents/Documents';

const MediaBody = () => {
	return (
		<div className ='mediabody'>
			<div className='mediabody__news'>
				<h1>News and Press Releases</h1>
				{newsData.map(item=>(
					<NewsItem 
					featuredImage={item.featuredImage}
					description={item.description}
					key={item.newsId}
					newsId={item.newsId}
					className='newsrow__item'
				/>
				))}
			</div>

			<div className='mediabody__documents'>
				<h1>Published Documents</h1>
				<Documents />
			</div>
		</div>
	)
}

export default MediaBody
