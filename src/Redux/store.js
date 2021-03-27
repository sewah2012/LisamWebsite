import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import UIReducer from './reducers/UIReducer.js';

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
	user: userReducer,
	data: dataReducer,
	UI: UIReducer
});

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
	reducers, 
	initialState, 
	composeSetup(
		applyMiddleware(...middleware), 
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
