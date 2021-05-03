import axios from "axios";
import { SET_AlUMINI,CLEAR_ERRORS, DELETE_NEWS, LOADING_DATA, LOADING_UI, POST_NEWS, SET_ERRORS, SET_NEWS_ARTICLE, SET_NEWS_ARTICLES, STOP_LOADING_UI, ADD_ALUMINI, DELETE_ALUMINI, SET_LEADERS, ADD_LEADER, ADD_CHAIRMAN, SET_CHAIRMAN, DELETE_CHAIRMAN } from "../types";


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

export const addAlumini = (newAlumini, handleClose) => async (dispatch) => {
	dispatch({ type: LOADING_UI });

	await axios.post('/alumini', newAlumini)
		.then(res => {
			dispatch({
				type: ADD_ALUMINI,
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

export const deleteAlumini = (aluminiID, handleClose)=>(dispatch)=>{
	axios
	  .get(`delete/alumini/${aluminiID}`)
	  .then(res=>{
		  console.log(res.data)
		  dispatch({
			  type:DELETE_ALUMINI,
			  payload:aluminiID
		  });

		  handleClose();

	  })
}

export const editAlumini=(aluminiID,data,handleClose)=>(dispatch)=>{
	dispatch({type:LOADING_UI});
	axios.post(`/edit/alumini/${aluminiID}`, data)
	.then((res)=>{
		// console.log(res);
		dispatch(getAlumini());
		handleClose();
	})
	.catch(err=>console.log(err));
}

//leaders action 
export const getLeaders=()=>(dispatch)=>{
	dispatch({type:LOADING_DATA});
	axios.get('/leaders')
	.then(res => {
		dispatch({ type: SET_LEADERS, payload: res.data });
	})
	.catch(err => {
		dispatch({ type: SET_LEADERS, payload: [] });
	})
}

export const addLeader = (newLeader, handleClose) => async (dispatch) => {
	dispatch({ type: LOADING_UI });

	await axios.post('/leaders', newLeader)
		.then(res => {
			dispatch({
				type: ADD_LEADER,
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

export const editLeader=(leaderId,data,handleClose)=>(dispatch)=>{
	dispatch({type:LOADING_UI});
	axios.post(`/edit/leaders/${leaderId}`, data)
	.then((res)=>{
		// console.log(res);
		dispatch(getLeaders());
		handleClose();
	})
	.catch(err=>console.log(err));
}

//committee chairman

export const getChairman=()=>(dispatch)=>{
	dispatch({type:LOADING_DATA});
	axios.get('/chairman')
	.then(res => {
		dispatch({ type: SET_CHAIRMAN, payload: res.data });
	})
	.catch(err => {
		dispatch({ type: SET_CHAIRMAN, payload: [] });
	})
}

export const addChairman = (newChairman, handleClose) => async (dispatch) => {
	dispatch({ type: LOADING_UI });

	await axios.post('/chairman', newChairman)
		.then(res => {
			dispatch({
				type: ADD_CHAIRMAN,
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

export const editChairman=(leaderId,data,handleClose)=>(dispatch)=>{
	dispatch({type:LOADING_UI});
	axios.post(`/edit/chairman/${leaderId}`, data)
	.then((res)=>{
		// console.log(res);
		dispatch(getChairman());
		handleClose();
	})
	.catch(err=>console.log(err));
}

export const deleteChairman = (chairmanID, handleClose)=>(dispatch)=>{
	axios
	  .get(`delete/chairman/${chairmanID}`)
	  .then(res=>{
		  console.log(res.data)
		  dispatch({
			  type:DELETE_CHAIRMAN,
			  payload:chairmanID
		  });

		  handleClose();

	  })
}