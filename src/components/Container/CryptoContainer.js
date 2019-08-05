import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

/* Import Actions */
import fetchingCoinData from '../../Actions/FetchingCoinData';

class CryptoContainer extends Component {
	componentDidMount() {
		this.props.fetchingCoinData();
	}

	render() {
		console.log(this.props.crypto);
		return (
			<View>
				<Text>Container</Text>
			</View>
		)		
	}
}

function mapStateToProps(state) {
	return {crypto: state.crypto};
}

export default connect(mapStateToProps, { fetchingCoinData })(CryptoContainer);