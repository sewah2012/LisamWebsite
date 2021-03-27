import { DELETE_NEWS, LOADING_DATA, POST_NEWS, SET_NEWS_ARTICLE, SET_NEWS_ARTICLES } from "../types";

const initState = {
	articles: [],
	article:{},
	loading: false
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
			return{
				...state,
				articles: [
					action.payload,
					...state.articles
				]
			}
		
		case SET_NEWS_ARTICLE:
			return{
				...state,
				article:action.payload
			}
		case DELETE_NEWS:
			var pos = state.articles.findIndex(news=>news.newsId===action.payload);
			state.articles.splice(pos,1);
			return {
				...state,
				// screams: state.screams.filter((scream) => scream.screamId !== action.payload )
			}
		default:
			return state;
	}
}