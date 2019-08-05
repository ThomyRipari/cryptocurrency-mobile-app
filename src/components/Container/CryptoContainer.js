import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const CryptoContainer = (props) => {
	return (
		<View>
			<Text>Container</Text>
		</View>
	)
}

function mapStateToProps(state) {
	return {crypto: state.crypto};
}

export default connect(mapStateToProps)(CryptoContainer);