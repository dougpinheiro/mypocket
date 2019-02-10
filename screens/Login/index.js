import React, { Component } from 'react'
import { StyleSheet, AppRegistry, Alert, View } from 'react-native';
import { Container, Content, Text, Button, Form, Item, Input, Header, Body, Title } from 'native-base';
import * as fbConfig from '../../constants/constants.js';
import * as firebase from 'firebase';

const monthsRef = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anoMesRef: this.getAnoMesRef(),
            email : "",
            password: "",
            config: {
				apiKey: fbConfig.API_KEY,
				authDomain: fbConfig.AUTH_DOMAIN,
				databaseURL: fbConfig.DATABASE_URL,
				storageBucket: fbConfig.STORAGE_BUCKET
			}
        };

        this.getAnoMesRef = this.getAnoMesRef.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.forgetCredentials = this.forgetCredentials.bind(this);

    }

    signIn(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
            console.log(error.code, error.message);
            this.props.navigation.navigate('Login');
        });
        this.props.navigation.navigate('Expenses');

    }

    signUp(){
        //firebase.auth().createUserWithEmailAndPassword()
    }

    forgetCredentials(){}

    getAnoMesRef() {
        const today = new Date();
        let anoMesRef = monthsRef[today.getMonth()] + "/" + today.getFullYear().toString();
        return anoMesRef;
    }

    componentWillMount(){
        if (!firebase.apps.length) {
            firebase.initializeApp(this.state.config);
        }
    }

    render() {
        const styles = this.props.styles;
        return (
            <Container>
                <Content style={{paddingTop:20}}>
                    <Form style={{ padding: 10 }}>
                        <Item regular style={{ margin: 10 }}>
                            <Input placeholder='Email' textContentType="emailAddress"
                                onChangeText={(_email) => this.setState({email:_email})}
                                value={this.state.email}
                            />
                        </Item>
                        <Item regular style={{ margin: 10 }}>
                            <Input placeholder='Password' secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(_pass) => this.setState({password:_pass})}
                            />
                        </Item>
                    </Form>
                    <View style={{ flex: 1, justifyContent: "center", alignSelf: "stretch", padding: 15 }}>
                        <Button rounded success style={{ flex: 1, alignSelf: "stretch" }} 
                            onPress={this.signIn}>
                            <Text>Sign in</Text>
                        </Button>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-around", marginTop:'20%'}}>
                            <Button rounded light>
                                <Text>Sign up</Text>
                            </Button>
                            <Button rounded light>
                                <Text>Forget my credentials</Text>
                            </Button>

                        </View>
                    </View>

                </Content>
            </Container>
        )
    }
}

AppRegistry.registerComponent('Login', () => Login);
