import { combineReducers } from 'redux';

/* Import Reducer */
import CryptoReducer from './Crypto/CryptoReducer';

export default combineReducers({
	crypto: CryptoReducer
})