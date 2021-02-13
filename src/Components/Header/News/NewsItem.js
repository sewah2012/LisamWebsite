import './NewsItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = ({featuredImage, description, newsId,publishedAt}) => {
	return (
		<div className='newsItem'> 
			<img src={featuredImage} alt='article' />
			<div className='newsItem__desc'>
				<Link to={`/media/news/${newsId}`}>
					<h2>{description}</h2>
				</Link>

				<p>Published: {publishedAt}</p>
			</div>
		</div>
	)
}

export default NewsItem
