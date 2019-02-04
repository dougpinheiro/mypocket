import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';

export default class ItemDespesa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            despesa: props.despesa
        };
    }

    componentWillMount() {
    }

    render() {
        switch (this.state.despesa.status) {
            case "pago":
                return (
                    <View style={[styles.container, styles.pago]}>
                        <Text style={styles.day}>{this.state.despesa.day}</Text>
                        <Text style={styles.desc}>{this.state.despesa.desc}</Text>
                        <Text style={styles.val}>{this.state.despesa.currency + " " + this.state.despesa.value}</Text>
                    </View>
                );

            case "atrasado":
                return (
                    <View style={[styles.container, styles.atrasado]}>
                        <Text style={styles.day}>{this.state.despesa.day}</Text>
                        <Text style={styles.desc}>{this.state.despesa.desc}</Text>
                        <Text style={styles.val}>{this.state.despesa.currency + " " + this.state.despesa.value}</Text>
                    </View>
                );
            default:
                return (
                    <View style={styles.container}>
                        <Text style={styles.day}>{this.state.despesa.day}</Text>
                        <Text style={styles.desc}>{this.state.despesa.desc}</Text>
                        <Text style={styles.val}>{this.state.despesa.currency + " " + this.state.despesa.value}</Text>
                    </View>
                );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: '#ffe0b3',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
    pago: {
        backgroundColor: '#d6f5d6'
    },
    atrasado: {
        backgroundColor: '#ffad99'
    },
    day: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 20,
        width: 40,
        height: 40,
        textAlign: 'center',
        paddingTop: 10
    },
    desc: {
        flex: 6,
        paddingLeft: 10
    },
    val: {
        flex: 2,
        textAlign: 'right',
        fontWeight: 'bold'
    },
});

AppRegistry.registerComponent('ItemDespesa', () => ItemDespesa);
