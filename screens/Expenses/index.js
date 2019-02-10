import React, { Component } from 'react';
import { View, ScrollView, Text, AppRegistry, StyleSheet } from 'react-native';
import ExpenseItem from '../../components/ExpenseItem';
import ExpensesHead from '../../components/Expenses/ExpensesHead';
import ExpensesResume from '../../components/Expenses/ExpensesResume';

export default class Expenses extends Component {


    constructor(props) {
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
            'Dezembro'];
        super(props);
        const now = new Date();
        this.state = {
            expenses: [
                { key: 873098875764, day: 21, desc: 'LKJDLKFJS FLKDJFLSK JF', currency: '€', value: 4239.99, status: 'pago' },
                { key: 87982264, day: 22, desc: 'DLFKKSJLFKJDLKF FJLSKF ', currency: '€', value: 569.99, status: 'pendente' },
                { key: 8798365764, day: 23, desc: 'LKLDJF LSKJFLKDJFL K SDJ', currency: '€', value: 349.99, status: 'pendente' },
                { key: 88039875764, day: 24, desc: 'DLFKJSLKF LSKDFJ SDKJFHSKD FSKDJFHSKDJFH SKDJFHKSJD HFKSJD HFKSJDFH', currency: '€', value: 239.99, status: 'atrasado' },
                { key: 832398775764, day: 24, desc: 'DFKSÇDLFKLF KÇLD KF', currency: '€', value: 29.99, status: 'atrasado' },
                { key: 879040495764, day: 25, desc: 'DFJLKF LKFJ LSKDFJ SD', currency: '€', value: 549.99, status: 'atrasado' },
                { key: 879764, day: 26, desc: 'DFJLDKFJ DLFKJDSFLKSD FJ', currency: '€', value: 39.99, status: 'atrasado' },
                { key: 86875764, day: 21, desc: 'LKJDLKFJS FLKDJFLSK JF', currency: '€', value: 4239.99, status: 'atrasado' },
                { key: 873930975764, day: 24, desc: 'DLFKJSLKF LSKDFJLSKDFJ LSKDF ', currency: '€', value: 239.99, status: 'atrasado' },
                { key: 8222225764, day: 24, desc: 'DFKSÇDLFKLF KÇLD KF', currency: '€', value: 29.99, status: 'atrasado' },
                { key: 8333375764, day: 25, desc: 'DFJLKF LKFJ LSKDFJ SD', currency: '€', value: 549.99, status: 'pago' },
                { key: 84444875764, day: 26, desc: 'DFJLDKFJ DLFKJDSFLKSD FJ', currency: '€', value: 39.99, status: 'pago' },
                { key: 85555875764, day: 21, desc: 'LKJDLKFJS FLKDJFLSK JF', currency: '€', value: 4239.99, status: 'pendente' },
                { key: 879666875764, day: 22, desc: 'DLFKKSJLFKJDLKF FJLSKF ', currency: '€', value: 569.99, status: 'pago' },
                { key: 8798777775764, day: 23, desc: 'LKLDJF LSKJFLKDJFL K SDJ', currency: '€', value: 349.99, status: 'pendente' },
                { key: 87988888764, day: 24, desc: 'DLFKJSLKF LSKDFJLSKDFJ LSKDF ', currency: '€', value: 239.99, status: 'pago' }
            ],
            year: now.getFullYear().toString(),
            month: months[now.getMonth()]
        };

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnPending = this.handleOnPending.bind(this);
        this.handleOnSuccess = this.handleOnSuccess.bind(this);
    }

    componentWillMount() {
    }

    handleOnDelete(_key) {
        var array = this.state.expenses;
        var obj = array.filter((e) => e.key == _key);
        var index = array.indexOf(obj[0]);
        if (index > -1) {
            console.log(array[index]);
            delete array[index];
        }
        // array = [2, 9]
        //console.log(array);
        this.setState({expenses : array});
    }
    
    handleOnPending(_key) {
        var array = this.state.expenses;
        var obj = array.filter((e) => e.key === _key);
        var index = array.indexOf(obj[0]);
        if (index > -1) {
            array[index].status = "pendente";
        }
        // array = [2, 9]
        //console.log(array);
        this.setState({expenses : array});
    }
    
    handleOnSuccess(_key) {
        var array = this.state.expenses;
        var obj = array.filter((e) => e.key === _key);
        var index = array.indexOf(obj[0]);
        if (index > -1) {
            array[index].status = "pago";
        }
        // array = [2, 9]
        //console.log(array);
        this.setState({expenses : array});
    }


    render() {
        return (
            <View style={styles.container}>
                <ExpensesHead style={styles.head} year={this.state.year} month={this.state.month} />
                <ScrollView style={styles.item}>
                    {
                        this.state.expenses.map((prop, key) => {
                            return (
                                <ExpenseItem 
                                    onDelete={this.handleOnDelete} 
                                    despesa={prop} 
                                    onPending={this.handleOnPending}
                                    onSuccess={this.handleOnSuccess}
                                    />
                            )
                        })
                    }
                </ScrollView>
                <ExpensesResume style={styles.resume} expenses={this.state.expenses}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginTop: 24
    },
    item: {
        flex: 4,
        marginBottom: 2,
        alignContent: 'center'
    },
    head: {
        flex: 2
    },
    resume: {
        flex: 6
    },
    mainMenu: {
        flex: 2
    }
});

AppRegistry.registerComponent('Expenses', () => Expenses);
