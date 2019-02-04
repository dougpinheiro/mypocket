import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';

export default class DespesasHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year: props.year,
            month: props.month
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.menu}>Menu</Text>
                <Text style={styles.month}>{this.state.month}</Text>
                <Text> / </Text>
                <Text style={styles.year}>{this.state.year}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        padding : 10,
        backgroundColor : '#d9d9d9'
        //flexDirection : 'row'
    },
    menu: {
        flex: 1
    }, 
    month: {
        flex: 6,
        textAlign: 'right'
    },
    year: {
        flex: 1
    }
});

AppRegistry.registerComponent('DespesasHead', () => DespesasHead);
