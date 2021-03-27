import axios from 'axios';
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_LOADING_USER } from '../types';

export const loginUser = (userData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.post('/login', userData)
		.then(res => {
			const FBIdToken = `Bearer ${res.data.token}`;
			localStorage.setItem('FBIdToken', FBIdToken); //persist token into local storage 
			axios.defaults.headers.common['Authorization'] = FBIdToken; // add token to next axios requests ... 
			dispatch({type:SET_AUTHENTICATED});
			dispatch(getUserData());

			dispatch({ type: CLEAR_ERRORS });

			history.push('/admin-panel');
		})
		.catch(err => {
			dispatch({
				type: SET_ERRORS,
				payload: err.response.data
			})
		});
}

export const signupUser = (newUserData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.post('/signup', newUserData)
		.then(res => {
			const FBIdToken = `Bearer ${res.data.token}`;
			localStorage.setItem('FBIdToken', FBIdToken);
			axios.defaults.headers.common['Authorization'] = FBIdToken;
			// dispatch({type:SET_AUTHENTICATED});
			dispatch(getUserData());

			dispatch({ type: CLEAR_ERRORS });

			history.push('/');
		})
		.catch(err => {
			dispatch({
				type: SET_ERRORS,
				payload: err.response.data
			})
		});
}

export const logoutUser=()=>(dispatch)=>{
	localStorage.removeItem('FBIdToken');
	delete axios.defaults.headers.common['Authorization'];
	dispatch({type:SET_UNAUTHENTICATED});
}




export const getUserData = () => (dispatch) => {
	dispatch({type:SET_LOADING_USER});
	axios.get('/user')
		.then(res => {

			// console.log(res.data);
			dispatch({
				type: SET_USER,
				payload: res.data
			})
		})
		.catch(err => console.log(err));
}