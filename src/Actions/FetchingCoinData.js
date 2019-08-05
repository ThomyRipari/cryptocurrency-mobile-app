import axios from 'axios';

/* Import API URL */
import { API_BASE_URL } from '../Utils/Constants';

export default function fetchingCoinData() {  
	return dispatch => {
		dispatch({type: 'LOADING_COIN_DATA'});

		axios.get(API_BASE_URL)

		.then((res) => {
			dispatch({type: 'GET_COIN_DATA_SUCCESS', payload: res.data})
		})

		.catch((err) => {
			dispatch({type: 'GET_COIN_DATA_ERROR', payload: err.data})
		})
	}
}