import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Header, Content, DatePicker, Text, View } from 'native-base';
export default class MyDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }


    render() {
        return (
                <View>
                    <DatePicker
                        defaultDate={new Date()}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2019, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="PAYMENT DATE"
                        textStyle={{ color: "black" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                        disabled={false}
                    />  
                </View>
        );
    }
}

AppRegistry.registerComponent('MyDatePicker', ()=>MyDatePicker);