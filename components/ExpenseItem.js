import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, Alert } from 'react-native';
import { SwipeRow, Button, Icon } from 'native-base'

export default class ExpenseItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            despesa: props.despesa
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.setItemPending = this.setItemPending.bind(this);
        this.setItemSuccess = this.setItemSuccess.bind(this);
    }

    deleteItem(key){
        this.props.onDelete(key);
    }

    setItemPending(key){
        this.props.onPending(key);
    }

    setItemSuccess(key){
        this.props.onSuccess(key);
    }

    render() {
        switch (this.state.despesa.status) {
            case "pago":
                return (
                    <SwipeRow
                        rightOpenValue={-150}
                        disableRightSwipe={true}
                        body={
                            <View style={[styles.container, styles.pago]}>
                                <Text style={styles.day}>{this.state.despesa.day}</Text>
                                <Text style={styles.desc}>{this.state.despesa.desc}</Text>
                                <Text style={styles.val}>{this.state.despesa.currency + " " + this.state.despesa.value}</Text>
                            </View>
                        }
                        right={
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <Button warning onPress={() => this.setItemPending(this.state.despesa.key)}>
                                    <Icon active name="skip-backward" />
                                </Button>
                                <Button danger onPress={() => this.deleteItem(this.state.despesa.key)}>
                                    <Icon active name="trash" />
                                </Button>
                            </View>
                        }
                    />

                );

            case "atrasado":
                return (
                    <SwipeRow
                        rightOpenValue={-150}
                        disableRightSwipe={true}
                        body={
                            <View style={[styles.container, styles.atrasado]}>
                                <Text style={styles.day}>{this.state.despesa.day}</Text>
                                <Text style={styles.desc}>{this.state.despesa.desc}</Text>
                                <Text style={styles.val}>{this.state.despesa.currency + " " + this.state.despesa.value}</Text>
                            </View>
                        }
                        right={
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Button success onPress={() => this.setItemSuccess(this.state.despesa.key)}>
                                    <Icon active name="checkmark-circle-outline" />
                                </Button>
                                <Button warning onPress={() => this.setItemPending(this.state.despesa.key)}>
                                    <Icon active name="skip-backward" />
                                </Button>
                                <Button danger onPress={() => this.deleteItem(this.state.despesa.key)}>
                                    <Icon active name="trash" />
                                </Button>
                            </View>
                        }
                    />

                );
            default:
                return (
                    <SwipeRow
                        rightOpenValue={-150}
                        disableRightSwipe={true}
                        body={
                            <View style={styles.container}>
                                <Text style={styles.day}>{this.state.despesa.day}</Text>
                                <Text style={styles.desc}>{this.state.despesa.desc}</Text>
                                <Text style={styles.val}>{this.state.despesa.currency + " " + this.state.despesa.value}</Text>
                            </View>
                        }
                        right={
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Button success onPress={() => this.setItemSuccess(this.state.despesa.key)}>
                                    <Icon active name="checkmark-circle-outline" />
                                </Button>
                                <Button danger onPress={() => this.deleteItem(this.state.despesa.key)}>
                                    <Icon active name="trash" />
                                </Button>
                            </View>
                        }
                    />

                );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 5,
        backgroundColor: '#ffe0b3',
        marginLeft: 8,
        marginRight: -8,
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

AppRegistry.registerComponent('ExpenseItem', () => ExpenseItem);
