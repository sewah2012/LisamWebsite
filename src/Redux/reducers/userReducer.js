import { SET_USER,SET_UNAUTHENTICATED,SET_AUTHENTICATED, SET_LOADING_USER} from '../types';

const initialState={
	authenticated: false,
	userCredential: {},
	loading: false
}

const userReducer=(state=initialState, action)=>{
	switch (action.type) {
		case SET_AUTHENTICATED:
			return {
				...state,
				authenticated:true
			}
		case SET_UNAUTHENTICATED:
			return initialState;
			
		case SET_USER:
			return{
				authenticated: true,
				loading:false,
				...action.payload
			}
		case SET_LOADING_USER:
			return {
				...state,
				loading:true
			}
		default: 
		return state;
	}
};

export default userReducer;