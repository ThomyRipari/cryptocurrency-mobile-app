import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';

/* Import Actions */
import fetchingCoinData from '../../Actions/FetchingCoinData';

/* Import Components */
import CoinCard from './CoinCard';
import Spinner from 'react-native-loading-spinner-overlay';

class CryptoContainer extends Component {
	componentDidMount() {
		this.props.fetchingCoinData();
	}

	render() {
		const { coins, loading } = this.props.crypto;

		if (loading) {
			return (
				<View>
					<Spinner 
						visible={loading}
						textContent={"Loading..."}
						animation="fade"
					/>
				</View>
			)
		} else {
			return (
				<ScrollView contentContainerStyle={styles.contentContainer}>
					{coins.map((coin, index) => (
						<CoinCard 
							key={index}
							name={coin.name}
							symbol={coin.symbol}
							price={coin.price_usd}
							percent_change_24h={coin.percent_change_24h}
							percent_change_7d={coin.percent_change_7d}
						/>
					))}
				</ScrollView>
			)				
		}
	}
}

const styles = {
	contentContainer: {
		paddingBottom: 100,
		paddingTop: 55
	}

}

function mapStateToProps(state) {
	return {crypto: state.crypto};
}

export default connect(mapStateToProps, { fetchingCoinData })(CryptoContainer);