import React, { Component } from 'react'
import {View, TextInput} from 'react-native';

export default class InputForm extends Component {
    constructor(props){
        super(props);
        this.setState({text:'Teste'});
    }
    
    render() {
        return (
        <View>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        </View>
        );
  }
}
