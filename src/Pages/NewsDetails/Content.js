import './Content.css';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { newsData } from '../../newsTestData'
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getOneNews } from '../../Redux/actions/newsActions';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const Content = () => {
	// const [loading, setLoading] = useState(true);
	dayjs.extend(relativeTime);
	const [news, setnews] = useState(null);

	const {newsid} = useParams();
	const dispatch = useDispatch()
	const {article} = useSelector(state => state.data);
	const {loading} = useSelector(state => state.UI)



	useEffect(() => {
		// const found = newsData.find((x) => x.newsId == newsid);
		// setnews(found);
		// setLoading(false);

		dispatch(getOneNews(newsid))

		return () => {

		}
	}, [newsid]);

	return (
		<div>
			<div className='content__nav'>
				<Link to='/'><Button color='primary'>Go Home</Button></Link>
				<Link to='/media'><Button color='primary'>View More</Button></Link>

			</div>
			{loading ? <h1>loading ...</h1> :
				<div className='content'>
					<img src={article?.imageUrl} alt='' />
					<h2> {article?.title}</h2>
					<h5>Published:  {dayjs(article?.createdAt).fromNow()}</h5>
					<h5>BY: {article?.createdBy}</h5>

					<p>
						{article?.body}
					</p>
				</div>}

			<div className='content__nav'>
				<Link to='/'><Button color='primary'>Go Home</Button></Link>
				<Link to='/media'><Button color='primary'>View More</Button></Link>

			</div>
		</div>
	)
}

export default Content;
