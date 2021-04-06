import axios from "axios";
import { SET_AlUMINI,CLEAR_ERRORS, DELETE_NEWS, LOADING_DATA, LOADING_UI, POST_NEWS, SET_ERRORS, SET_NEWS_ARTICLE, SET_NEWS_ARTICLES, STOP_LOADING_UI } from "../types";


export const postNews = (newNews, handleClose) => async (dispatch) => {
	dispatch({ type: LOADING_UI });

	await axios.post('/news', newNews)
		.then(res => {
			dispatch({
				type: POST_NEWS,
				payload: res.data
			});

			dispatch({
				type: CLEAR_ERRORS,
			});

			handleClose();
		})
		.catch(err => {
			dispatch({
				type: SET_ERRORS,
				payload: err.response.data
			});
		})

}

export const getNews = () => (dispatch) => {
	dispatch({ type: LOADING_DATA });
	axios.get('/news')
		.then(res => {
			dispatch({ type: SET_NEWS_ARTICLES, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: SET_NEWS_ARTICLES, payload: [] });
		})
}

export const getOneNews = (newsId) => (dispatch) => {
	dispatch({type:LOADING_UI});
	axios.get(`/news/${newsId}`)
	.then(res=>{
		dispatch({
			type:SET_NEWS_ARTICLE,
			payload: res.data
		});
		dispatch({type:STOP_LOADING_UI})
	})
	.catch(err=>console.log(err))
}

export const deleteNews = (newsId, handleClose)=>(dispatch)=>{
	axios
	  .get(`/delete/${newsId}`)
	  .then(res=>{
		  console.log(res.data)
		  dispatch({
			  type:DELETE_NEWS,
			  payload:newsId
		  });

		  handleClose();

	  })
}

export const editNews=(newsId,data,handleClose)=>(dispatch)=>{
	dispatch({type:LOADING_UI});
	axios.post(`/news/${newsId}`, data)
	.then((res)=>{
		// console.log(res);
		dispatch(getNews());
		handleClose();
	})
	.catch(err=>console.log(err));
}


// alumini data ..... 

export const getAlumini=()=>(dispatch)=>{
	dispatch({type:LOADING_DATA});
	axios.get('/alumini')
	.then(res => {
		dispatch({ type: SET_AlUMINI, payload: res.data });
	})
	.catch(err => {
		dispatch({ type: SET_AlUMINI, payload: [] });
	})
}
