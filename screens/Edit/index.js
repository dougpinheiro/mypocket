import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry, TextInput, Alert } from 'react-native';
import {Text, Button} from 'native-base';
import * as fbConfig from '../../constants/constants.js';
import firebase from 'firebase';
import MyDatePicker from '../../components/MyDatePicker.js';

export default class Edit extends Component {

	constructor(props) {
		let uid;
		super(props);
		let months = [
			'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
			'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
		];
		const now = new Date();
		const year = now.getFullYear().toString();
		const month = months[now.getMonth()];
		this.state = {
			year: year,
			month: month,
			description: '',
			price: 0,
			reference: '',
			due: undefined,
			config: {
				apiKey: fbConfig.API_KEY,
				authDomain: fbConfig.AUTH_DOMAIN,
				databaseURL: fbConfig.DATABASE_URL,
				storageBucket: fbConfig.STORAGE_BUCKET
			},
			uid: ''
		}


		this.saveExpense = this.saveExpense.bind(this);
	}

	saveExpense() {
		if (uid != null) {
			const curDate = new Date();
			const month = curDate.getMonth() + 1;
			const day = curDate.getDate();
			const year = curDate.getFullYear();
			/*firebase.database().ref('appusers/' + uid + '/expenses/' + year + 
			'/'+month+'/'+day).child(curDate.getTime())
				.set({
					key: curDate.getTime(), 
					year: year,
					month: month,
					desc: 'TESTE',
					payment: 999.98,
					reference: 'REFERÊNCIA',
					due: '10/10/2019',
					dtPayment: curDate
				});
				*/
		}

	}

	componentWillMount() {
		

		firebase.initializeApp(this.state.config);
		firebase.auth().signInWithEmailAndPassword(fbConfig.EMAIL, fbConfig.PASS);
		firebase.auth().onAuthStateChanged(function (user) {
			if (user == null) {
				Alert.alert('Acess denied!');
			} else {
				uid = user.uid;
				console.log(user);
			}
		});

		/*.catch(function (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
		const today = new Date();
		const ano = today.getFullYear().toString();
		const mes = today.getMonth().toString();
		const ref = firebase.database().ref('compras/' + ano + '/' + mes);
		ref.on('value', snap => {
			let cat = [];
			snap.forEach(function (childSnapshot) {
				var key = childSnapshot.key;
				var childData = childSnapshot.child('category').val();
				if (!cat.includes(childData)) {
					cat.push(childData);
				}
			});
			this.setState({ categories: cat });
		});*/
	}

	componentWillUnmount() {
		
		firebase.auth().signOut().then(function () {
			console.log('User out!');
		}, function (error) {
			console.log(error);
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{borderColor:'#999', borderWidth:1}}>
					<MyDatePicker/>
				</View>

				<TextInput autoCapitalize="characters" style={[styles.description, styles.ti]}
					placeholder="Description"
					value={this.state.description}
					onChangeText={(desc) => this.setState({ description: desc })}
				/>
				<TextInput style={styles.ti} placeholder="Payment" value={this.state.price.toString()}
					onChangeText={(price) => this.setState({ price: price })}
				/>
				<TextInput style={[styles.reference, styles.ti]}
					placeholder="Reference" value={this.state.reference}
					onChangeText={(refer) => this.setState({ reference: refer })}

				/>
				<View style={styles.paymentDates}>
					<TextInput style={[styles.due, styles.ti]} placeholder="Due" value={this.state.due}
						onChangeText={(due) => this.setState({ due: due })}
					/>
					<TextInput style={[styles.payment, styles.ti]} placeholder="Payment" value={this.state.payment}
						onChangeText={(payment) => this.setState({ payment: payment })}
					/>
				</View>
				<Button rounded light onPress={this.saveExpense}>
					<Text>Save</Text>
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'stretch',
		paddingTop: 70,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		justifyContent: 'space-around'
	},
	description: {
		height: 40
	},
	paymentDates: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	due: {
		flex: 1
	},
	payment: {
		flex: 1

	},
	ti: {
		borderColor: 'gray',
		borderWidth: 1,
		padding: 5
	}, yearView: {
		flexDirection: 'row'
	}, year: {
		flex: 1

	}, month: {
		flex: 1
	}
});

AppRegistry.registerComponent('Edit', () => Edit);

