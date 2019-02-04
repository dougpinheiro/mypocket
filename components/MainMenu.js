import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, TouchableHighlight , Alert} from 'react-native';

export default class MainMenu extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
        };
        this.addExpense = this.addExpense.bind(this); 
    }

    addExpense(){
        Alert.alert('Hi');
    }

    render() {
                return (
                    <View style={styles.container}>
                        <TouchableHighlight onPress={this.addExpense} underlayColor={'white'}>
                            <Text style={styles.plus}>+</Text>
                        </TouchableHighlight>
                    </View>
                );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'center'
    },
    plus: {
        color: 'white',
        backgroundColor: '#c94c4c',
        borderRadius: 30,
        height: 60,
        width: 60,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('MainMenu', () => MainMenu);
