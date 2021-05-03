import { ADD_ALUMINI, ADD_CHAIRMAN, ADD_LEADER, ADD_PAST_LEADER, DELETE_ALUMINI, DELETE_CHAIRMAN, DELETE_NEWS, DELETE_PAST_LEADER, LOADING_DATA, POST_NEWS, SET_AlUMINI, SET_CHAIRMAN, SET_LEADERS, SET_NEWS_ARTICLE, SET_NEWS_ARTICLES, SET_PAST_LEADERS } from "../types";

const initState = {
	articles: [],
	article: {},
	loading: false,
	alumini: [],
	leaders: [],
	pastLeaders: [],
	chairman: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
	switch (action.type) {
		case LOADING_DATA:
			return {
				...state,
				loading: true
			}
		case SET_NEWS_ARTICLES:
			return {
				...state,
				articles: action.payload,
				loading: false
			}

		case POST_NEWS:
			return {
				...state,
				articles: [
					action.payload,
					...state.articles
				]
			}


		case SET_NEWS_ARTICLE:
			return {
				...state,
				article: action.payload
			}
		case DELETE_NEWS:
			var pos = state.articles.findIndex(news => news.newsId === action.payload);
			state.articles.splice(pos, 1);
			return {
				...state,
				// screams: state.screams.filter((scream) => scream.screamId !== action.payload )
			}

		case SET_AlUMINI:
			return {
				...state,
				alumini: action.payload,
				loading: false
			}
		case ADD_ALUMINI:
			return {
				...state,
				alumini: [
					action.payload,
					...state.alumini
				]
			}
		case DELETE_ALUMINI:
			var position = state.alumini.findIndex(a => a.aluminiID === action.payload);
			state.alumini.splice(position, 1);
			return {
				...state,
				// screams: state.screams.filter((scream) => scream.screamId !== action.payload )
			}

		case SET_LEADERS:
			return {
				...state,
				leaders: action.payload,
				loading: false
			}

		case ADD_LEADER:
			return {
				...state,
				leaders: [
					action.payload,
					...state.leaders
				]
			}

		case SET_CHAIRMAN:
			return {
				...state,
				chairman: action.payload,
				loading: false
			}

		case ADD_CHAIRMAN:
			return {
				...state,
				chairman: [
					action.payload,
					...state.chairman
				]
			}
		case DELETE_CHAIRMAN:
			var location = state.chairman.findIndex(a => a.chairmanID === action.payload);
			state.chairman.splice(location, 1);
			return {
				...state,
				// screams: state.screams.filter((scream) => scream.screamId !== action.payload )
			}

		//past leaders reducers 
		case SET_PAST_LEADERS:
			return {
				...state,
				pastLeaders: action.payload,
				loading: false
			}

		case ADD_PAST_LEADER:
			return {
				...state,
				pastLeaders: [
					action.payload,
					...state.pastLeaders
				]
			}
		case DELETE_PAST_LEADER:
			var spot = state.pastLeaders.findIndex(a => a.leaderID === action.payload);
			state.pastLeaders.splice(spot, 1);
			return {
				...state,
				// screams: state.screams.filter((scream) => scream.screamId !== action.payload )
			}
		default:
			return state;
	}
}