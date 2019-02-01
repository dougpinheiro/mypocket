import React, { Component } from 'react';
import { StyleSheet, View, Alert, TouchableHighlight, Text, Picker, Modal } from 'react-native';
import firebase from 'firebase';
import * as fbConfig from './constants/constants.js';
import { TextInput } from 'react-native-gesture-handler';
import { red } from 'ansi-colors';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			desc: '',
			value: 0.0,
			categories: [],
			selCategory: '',
			categoryModalVisible: false
		};
		this.addCompras = this.addCompras.bind(this);
		this.addCategory = this.addCategory.bind(this);
	}

	componentWillMount() {


		const config = {
			apiKey: fbConfig.API_KEY,
			authDomain: fbConfig.AUTH_DOMAIN,
			databaseURL: fbConfig.DATABASE_URL,
			storageBucket: fbConfig.STORAGE_BUCKET
		}
		

		try {
			firebase.initializeApp(config);

			firebase.auth()
				.signInWithEmailAndPassword(fbConfig.EMAIL, fbConfig.PASS)
				.catch(function (error) {
					var errorCode = error.code;
					var errorMessage = error.message;
					console.log(errorCode, errorMessage);

				});

			const today = new Date();
			const ano = today.getFullYear().toString();
			const mes = today.getMonth().toString();
			console.log(mes);
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
			});
		} catch (err) {
			console.log(err);
		}
	}

	addCompras() {
		const today = new Date();
		const ano = today.getFullYear().toString();
		const mes = today.getMonth().toString();
		const key = today.getTime();
		const ref = firebase.database().ref('compras/' + ano + '/' + mes);
		ref.child(key).set({
			desc: this.state.desc,
			value: this.state.value,
			category: this.state.selCategory
		});

	}

	setModalVisible(visible) {
		this.setState({ categoryModalVisible: visible });
	}

	addCategory() {
		Alert.alert('Ae...');
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.form}>
					<View style={styles.view1}>
						<Modal
							animationType="slide"
							transparent={false}
							visible={this.state.categoryModalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.');
							}}>
							<View style={{ marginTop: 22 }}>
								<View>
									<Text>Hello World!</Text>

									<TouchableHighlight
										onPress={() => {
											this.setModalVisible(!this.state.categoryModalVisible);
										}}>
										<Text>Hide Modal</Text>
									</TouchableHighlight>
								</View>
							</View>
						</Modal>
						<Text style={styles.title}>MyPocket</Text>
						<Text>Making it simple!</Text>
						<View style={{ padding: 10 }}>

							<TextInput
								autoCapitalize="characters"
								style={styles.inputDesc}
								onChangeText={(d) => this.setState({ desc: d })}
								value={this.state.desc}
								placeholder="Descrição"
							/>
							<TextInput
								style={styles.inputDesc}
								onChangeText={(val) => this.setState({ value: val })}
								value={this.state.value}
								placeholder="Valor"
								keyboardType="numeric"
							/>
							<TouchableHighlight onLongPress={this.addCategory} underlayColor="white"  >
								<Picker
									selectedValue={this.state.selCategory}
									o
									onValueChange={(itemValue, itemIndex) =>
										this.setState({ selCategory: itemValue })
									}
									mode="dropdown">
									{
										this.state.categories.map((element, index) => {
											return <Picker.Item label={element} value={element} />
										})
									}
								</Picker>
							</TouchableHighlight>
						</View>
					</View>
					<View style={{
						marginBottom: 15,
						marginTop: 15
					}}>
						<TouchableHighlight onPress={this.addCompras} underlayColor="white" >
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
	},
	view1: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		paddingTop: 50,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		fontSize: 40
	},
	inputDesc: {
		height: 40,
		width: 300,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 10,
		marginTop: 10
	}
});

