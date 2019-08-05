import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

/* Import Components */
import Header from './components/Header/Header';

/* Import Store */
import Store from './Store/Store';

const App = () => {
	return (
		<Provider store={Store}>
			<View>
				<Header />
				<Text>HELLO</Text>
			</View>
		</Provider>
	)
}

export default App;