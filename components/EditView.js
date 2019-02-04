import React, { Component } from 'react';
import {View, Text, StyleSheet, AppRegistry, TextInput, Button} from 'react-native';

export default class EditView extends Component {
	
	constructor(props) {
		super(props);
		let months = [
			'Janeiro', 
			'Fevereiro', 
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro']
			const now = new Date();
			const year = now.getFullYear().toString();
			const month = months[now.getMonth()];
			this.state = {
				year: year,
				month: month
			}
		}
		
		render() {
			return (
				<View style={styles.container}>
				<View style={styles.yearView}>
				<TextInput style={[styles.year, styles.ti]} placeholder="Year" value={this.state.year}/>
				<TextInput style={[styles.month, styles.ti]} placeholder="Month" value={this.state.month}/>
				</View>
				<TextInput style={[styles.description, styles.ti]} placeholder="Description" value=""/>
				<TextInput style={[styles.value, styles.ti]} placeholder="Value" value=""/>
				<TextInput style={[styles.reference, styles.ti]} placeholder="Reference" value=""/>
				<View style={styles.paymentDates}>
				<TextInput style={[styles.due, styles.ti]} placeholder="Due" value=""/>
				<TextInput style={[styles.payment, styles.ti]} placeholder="Payment" value=""/>
				</View>
				<Button title="Save"/>
				</View>
				);
			}
		}
		
		const styles = StyleSheet.create({
			container: {
				flex: 1,
				alignSelf: 'stretch',
				padding: 20,
				justifyContent: 'space-around'
			},
			description: {
				height: 40
			},	
			paymentDates: {
				flexDirection: 'row',
				justifyContent: 'space-around'
			},
			due:{
				flex: 1
			},
			payment:{
				flex: 1
				
			},
			ti: {
				borderColor: 'gray', 
				borderWidth: 1,
				padding: 5
			}, yearView:{
				flexDirection: 'row'
			}, year: {
				flex: 1
				
			}, month: {
				flex: 1
			}
		});
		
		AppRegistry.registerComponent('EditView', () => EditView);
		
		