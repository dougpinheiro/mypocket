import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { AppRegistry } from 'react-native';

export default class MainFooterMenu extends Component {

    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    render() {
        return (
            <Footer>
            
              <FooterTab>
                <Button>
                  <Icon name="apps" />
                </Button>
                <Button>
                  <Icon name="camera" />
                </Button>
                <Button active>
                  <Icon active name="navigate" />
                </Button>
                <Button>
                  <Icon name="person" />
                </Button>
              </FooterTab>
            </Footer>
        );
    }
}

AppRegistry.registerComponent('MainFooterMenu', () => MainFooterMenu);
