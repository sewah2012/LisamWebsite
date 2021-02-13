import './Content.css';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { newsData } from '../../newsTestData'
import { Button } from '@material-ui/core';

const Content = () => {
	const { newsid } = useParams();
	const [loading, setLoading] = useState(true);
	const [news, setnews] = useState(null);



	useEffect(() => {
		const found = newsData.find((x) => x.newsId == newsid);
		setnews(found);
		setLoading(false);

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
					<img src={news?.featuredImage} alt='' />
					<h2> {news?.description}</h2>
					<h5>Published: {news?.publishedAt}</h5>

					<p>
						{news?.details}
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
