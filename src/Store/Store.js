import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/* Import Root Reducer */
import RootReducer from '../Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
	RootReducer,
	middleware
)

export default Store;