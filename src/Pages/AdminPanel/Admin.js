import './Admin.css';
import {Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import AdminHeader from './AdminHeader';
import NewsItem from '../../Components/Header/News/NewsItem';
import PublishNews from './NewsActivities/PublishNews';
import { useDispatch, useSelector } from 'react-redux';
import {getNews } from '../../Redux/actions/newsActions';
import DeleteNews from './NewsActivities/DeleteNews';
import EditNews from './NewsActivities/EditNews';

const Admin = () => {
	const dispatch = useDispatch();
	const { loading, articles } = useSelector(state => state.data);

	useEffect(() => {
		dispatch(getNews())
		return () => {
			
		}
	}, [dispatch])
	return (
		<div>

			<AdminHeader />
			{/* <Banner title='ADMIN PANEL' image='https://logos.textgiraffe.com/logos/logo-name/Admin-designstyle-candy-m.png' /> */}
			<Grid container spacing={16}>
				<Grid item sm={4} xs={12}>
					<div className='adminProfile'>
						<h1>Profile </h1>
					</div>
				</Grid>
				<Grid item sm={8} xs={12}>
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
											<EditNews news = {item} />
											<DeleteNews newsId = {item.newsId} />
										</div>
									</div>
								))
							}

						</div>
						)}

					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default Admin
