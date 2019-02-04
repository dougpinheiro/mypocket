import React, { Component } from 'react';
import {View, Text, StyleSheet, AppRegistry} from 'react-native';
import EditView from './components/EditView';

export default class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<EditView/>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
		marginTop: 2
	}
});

AppRegistry.registerComponent('App', () => App);

