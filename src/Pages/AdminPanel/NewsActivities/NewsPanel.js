import './NewsPanel.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PublishNews from './PublishNews';
import DeleteNews from './DeleteNews';
import EditNews from './EditNews';
import { getNews } from '../../../Redux/actions/newsActions';
import NewsItem from '../../../Components/Header/News/NewsItem';

const NewsPanel = () => {
	const dispatch = useDispatch();
	const { loading, articles } = useSelector(state => state.data);

	useEffect(() => {
		dispatch(getNews())
		return () => {

		}
	}, [dispatch])
	return (
		<div>


			{/* <Banner title='ADMIN PANEL' image='https://logos.textgiraffe.com/logos/logo-name/Admin-designstyle-candy-m.png' /> */}

			<div className='dashboardBody'>
				<PublishNews />

				{loading ? <h3>Loading Articles ... </h3> : (
					<div className='AdminnewsRow'>

						{
							articles.map((item) => (
								<div className='adminNewsItem'>
									<NewsItem
										featuredImage={item.imageUrl}
										description={item.title}
										key={item.newsId}
										newsId={item.newsId}
										publishedAt={item.createdAt}
										owner={item.createdBy}
										className='newsrow__item'
									/>

									<div className='actionsButtons'>
										<EditNews news={item} />
										<DeleteNews newsId={item.newsId} />
									</div>
								</div>
							))
						}

					</div>
				)}

			</div>

		</div>
	)
}

export default NewsPanel
