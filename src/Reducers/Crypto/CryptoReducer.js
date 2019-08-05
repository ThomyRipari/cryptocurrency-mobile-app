const initialState = {
	coins: [],
	loading: false,
	error: ''
}

function cryptoReducer(state = initialState, action) {
	switch(action.type) {
		case 'LOADING_COIN_DATA':
			return {...initialState, loading: true};

		case 'GET_COIN_DATA_SUCCESS':
			return {...initialState, coins: action.payload};

		case 'GET_COIN_DATA_ERROR':
			return {...initialState, error: action.payload};

		default:
			return state;
	}
}

export default cryptoReducer;