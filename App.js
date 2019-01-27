import React, { Component } from 'react';
import { StyleSheet, View, Alert, TouchableHighlight, Text, ListView, FlatList} from 'react-native';
import firebase from 'firebase';
import * as fbConfig from './constants/constants.js'; 

const config = {
	apiKey: fbConfig.API_KEY,
	authDomain: fbConfig.AUTH_DOMAIN,
	databaseURL: fbConfig.DATABASE_URL,
	storageBucket: fbConfig.STORAGE_BUCKET
}

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			compras : [
				{
					id: 135435546757,
					desc: "Alguma coisa que eu comprei",
					valor: 100.00
				},
				{
					id: 657645546757,
					desc: "Outra coisa que eu comprei",
					valor: 10.00
				},
				{
					id: 357356779875,
					desc: "Mais uma coisa que eu comprei",
					valor: 133.90
				},
				{
					id: 135435546757,
					desc: "Alguma coisa que eu comprei",
					valor: 100.00
				},
				{
					id: 657645546757,
					desc: "Outra coisa que eu comprei",
					valor: 10.00
				},
				{
					id: 357356779875,
					desc: "Mais uma coisa que eu comprei",
					valor: 133.90
				},
				{
					id: 135435546757,
					desc: "Alguma coisa que eu comprei",
					valor: 100.00
				},
				{
					id: 657645546757,
					desc: "Outra coisa que eu comprei",
					valor: 10.00
				},
				{
					id: 357356779875,
					desc: "Mais uma coisa que eu comprei",
					valor: 133.90
				}
			]
		}
	}

	componentWillMount() {
		//configure firebase 
		let appName = firebase.initializeApp(config);
		this.setState({ db : firebase.database() });
		
		let compra = {
		data: new Date(),
		desc: "roupa",
		valor: 12.99
		};
		/*
		let updates = {};
		dt_compra = (new Date()).getTime();
		updates['/compras/' + dt_compra] = compra;
		firebase.database().ref().update(updates);*/
	}

	onPressAdd() {
		console.log(this.state.db);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.form}>
					<View style={{alignItems:'center', justifyContent: 'center'}}>
						<Text style={{paddingTop: 50,paddingLeft: 10,paddingRight: 10,paddingBottom: 10,fontSize: 40}}>
							MyPocket
						</Text>
						<Text>Making it simple!</Text>
					</View>
					<View style={{flex: 2, marginTop:20, marginLeft:5}}> 
						<FlatList
							data={this.state.compras}
							renderItem={({item}) => <Text style={{fontSize:20, paddingTop:10, paddingBottom:10}}>{item.desc+'->'+item.valor}</Text>}
						/>
					</View>
					<View>
						<TouchableHighlight onPress={this.onPressAdd} underlayColor="white">
						<View style={styles.button}>
						<Text style={styles.buttonText}>+</Text>
						</View>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center'
	},
	button: {
	width: 100,
	height: 100,
	alignItems: 'center',
	backgroundColor: '#F55',
	borderRadius: 60
	},
	buttonText: {
	fontSize: 70,
	alignItems: 'center',
	justifyContent: 'center'
	},
	form: {
	flex: 2,
	marginTop: 40,
	alignItems: 'center'
	}
});

