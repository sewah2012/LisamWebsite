import './NewsItem.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const NewsItem = ({featuredImage, description, newsId,publishedAt,owner}) => {
	dayjs.extend(relativeTime);
	return (
		<div className='newsItem'> 
			<img src={featuredImage} alt='article' />
			<div className='newsItem__desc'>
				<Link to={`/media/news/${newsId}`}>
					<h2>{description}</h2>
				</Link>

				<Typography variant='body2' color='textSecondary'> Published: {dayjs(publishedAt).fromNow()}</Typography>
				
				<Typography variant='body2' color='textSecondary'> By:  {owner}</Typography>
			</div>
		</div>
	)
}

export default NewsItem
