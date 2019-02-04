import React, { Component } from 'react';
import { View, ScrollView, Text, AppRegistry, StyleSheet } from 'react-native';
import ItemDespesa from './ItemDespesa';
import DespesasHead from './DespesasHead';
import DespesasResume from './DespesasResume';
import MainMenu from './MainMenu';

export default class DespesasView extends Component {

    
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
            expenses: [],
            year: now.getFullYear().toString(),
            month: months[now.getMonth()]
        };
    }

    componentWillMount() {
        this.setState({
            expenses: [
                { day: 20, desc: 'ESCOLA DA MAITÊ', value: 9.99 },
                { day: 21, desc: 'PÃO', value: 0.99 },
                { day: 22, desc: 'SEGURO DO CARRO', value: 199.99 },
                { day: 23, desc: 'EDP', value: 289.99 },
                { day: 24, desc: 'CONTA DE ÁGUA', value: 9.99 },
                { day: 25, desc: 'ALMOÇO', value: 29.99 }
            ]
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <DespesasHead style={styles.head} year={this.state.year} month={this.state.month}/>
                <ScrollView style={styles.item}>
                    <ItemDespesa despesa={{day: 20, desc: 'JHDKJ DAKJSHD KAJSHD KJH D', currency: '€', value: 9.99, status: 'pendente'}}/>
                    <ItemDespesa despesa={{day: 21, desc: 'LKJDLKFJS FLKDJFLSK JF', currency: '€', value: 4239.99, status: 'pago'}}/>
                    <ItemDespesa despesa={{day: 22, desc: 'DLFKKSJLFKJDLKF FJLSKF ', currency: '€', value: 569.99, status: 'pendente'}}/>
                    <ItemDespesa despesa={{day: 23, desc: 'LKLDJF LSKJFLKDJFL K SDJ', currency: '€', value: 349.99, status: 'pendente'}}/>
                    <ItemDespesa despesa={{day: 24, desc: 'DLFKJSLKF LSKDFJ SDKJFHSKD FSKDJFHSKDJFH SKDJFHKSJD HFKSJD HFKSJDFH', currency: '€', value: 239.99, status: 'atrasado'}}/>
                    <ItemDespesa despesa={{day: 24, desc: 'DFKSÇDLFKLF KÇLD KF', currency: '€', value: 29.99, status: 'atrasado'}}/>
                    <ItemDespesa despesa={{day: 25, desc: 'DFJLKF LKFJ LSKDFJ SD', currency: '€', value: 549.99, status: 'atrasado'}}/>
                    <ItemDespesa despesa={{day: 26, desc: 'DFJLDKFJ DLFKJDSFLKSD FJ', currency: '€', value: 39.99, status: 'atrasado'}}/>
                    <ItemDespesa despesa={{day: 21, desc: 'LKJDLKFJS FLKDJFLSK JF', currency: '€', value: 4239.99, status: 'atrasado'}}/>
                    <ItemDespesa despesa={{day: 24, desc: 'DLFKJSLKF LSKDFJLSKDFJ LSKDF ', currency: '€', value: 239.99, status: 'atrasado'}}/>
                    <ItemDespesa despesa={{day: 24, desc: 'DFKSÇDLFKLF KÇLD KF', currency: '€', value: 29.99, status: 'atrasado'}}/>
                    <ItemDespesa despesa={{day: 25, desc: 'DFJLKF LKFJ LSKDFJ SD', currency: '€', value: 549.99, status: 'pago'}}/>
                    <ItemDespesa despesa={{day: 26, desc: 'DFJLDKFJ DLFKJDSFLKSD FJ', currency: '€', value: 39.99, status: 'pago'}}/>
                    <ItemDespesa despesa={{day: 21, desc: 'LKJDLKFJS FLKDJFLSK JF', currency: '€', value: 4239.99, status: 'pendente'}}/>
                    <ItemDespesa despesa={{day: 22, desc: 'DLFKKSJLFKJDLKF FJLSKF ', currency: '€', value: 569.99, status: 'pago'}}/>
                    <ItemDespesa despesa={{day: 23, desc: 'LKLDJF LSKJFLKDJFL K SDJ', currency: '€', value: 349.99, status: 'pendente'}}/>
                    <ItemDespesa despesa={{day: 24, desc: 'DLFKJSLKF LSKDFJLSKDFJ LSKDF ', currency: '€', value: 239.99, status: 'pago'}}/>
                </ScrollView>
                <DespesasResume style={styles.resume}/>
                <MainMenu style={styles.mainMenu}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginTop:20
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

AppRegistry.registerComponent('DespesasView', () => DespesasView);
