import React, { Component } from 'react';
import { StyleSheet, AppRegistry } from 'react-native';
import { Font } from 'expo';
import { Text, View } from 'native-base';
import {AppNavigator} from './config/router';

//import { Tabs } from './config/router';
import { createAppContainer } from "react-navigation";
import Login from './screens/Login';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false
		};

	}

	componentWillMount() {
		Font.loadAsync({
			'Roboto': require('native-base/Fonts/Roboto.ttf'),
			'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
		}).then(() => {
			this.setState({ fontsLoaded: true });
		});
	}

	render() {
		if (!this.state.fontsLoaded) {
			return (
				<Text>Loading...</Text>
			);
		}
		return <AppContainer />
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

AppRegistry.registerComponent('App', () => App);


