import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, TouchableHighlight } from 'react-native';

export default class DespesasResume extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.resumeContainer}>
                <View style={styles.pending}>
                    <Text style={styles.fontBold}>€ 9999.00</Text>
                </View>
                <View style={styles.payed}>
                    <Text style={styles.fontBoldBold}>€ 9999.00</Text>
                </View>
                <View style={styles.late}>
                    <Text style={styles.fontBold}>€ 9999.00</Text>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    resumeContainer: {
        flexDirection: 'row'
    },
    pending: {
        flex: 1,
        backgroundColor: '#ffe0b3',
        alignItems: 'center',
    },
    payed: {
        flex: 1,
        backgroundColor: '#d6f5d6',
        alignItems: 'center',
    },
    late: {
        flex: 1,
        backgroundColor: '#ffad99',
        alignItems: 'center',
    },
    fontBold: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 30,
    },
    fontBoldBold: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 22,
        paddingBottom: 22,
    }

});

AppRegistry.registerComponent('DespesasResume', () => DespesasResume);
