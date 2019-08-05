import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoinCard = ({name, symbol, price, percent_change_24h, percent_change_7d}) => {
	return (
		<View style={container}>
			<Text>{symbol}</Text>
			<Text>{name}</Text>
			<Text>{price} <Text style={bold}>$</Text></Text>
			<Text>{percent_change_24h}</Text>
			<Text>{percent_change_7d}</Text>
		</View>
	)
}

export default CoinCard;

const styles = StyleSheet.create({
	container: {
		display: 'flex'
	},

	bold: {
		fontWeight: 'bold'
	}
})

const { container, bold } = styles;