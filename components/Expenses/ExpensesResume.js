import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, TouchableHighlight } from 'react-native';

export default class ExpensesResume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pendingResume : 0,
            payedResume: 0,
            lateResume: 0
        }

    }

    componentWillMount(){
        let array = this.props.expenses
            .filter((x) => x.status === "pendente");
            let pVal = array.reduce((a,b) => {
                return isNaN(a) ? a.value : a + b['value'];
            });
        this.setState({pendingResume : pVal.toFixed(2)});
        array = this.props.expenses
            .filter((x) => x.status === "pago");
        pVal = array.reduce((a,b) => {
                return isNaN(a) ? a.value : a + b['value'];
            });
        this.setState({payedResume : pVal.toFixed(2)})
        array = this.props.expenses
            .filter((x) => x.status === "atrasado");
        pVal = array.reduce((a,b) => {
                return isNaN(a) ? a.value : a + b['value'];
            });
        this.setState({lateResume : pVal.toFixed(2)})
    }

    render() {
        return (
            <View style={styles.resumeContainer}>
                <View style={styles.pending}>
                    <Text style={styles.fontBold}>€ {this.state.pendingResume}</Text>
                </View>
                <View style={styles.payed}>
                    <Text style={styles.fontBoldBold}>€ {this.state.payedResume}</Text>
                </View>
                <View style={styles.late}>
                    <Text style={styles.fontBold}>€ {this.state.lateResume}</Text>
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

AppRegistry.registerComponent('ExpensesResume', () => ExpensesResume);
