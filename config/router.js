import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';

import Expenses from '../screens/Expenses';
//import Edit from '../screens/Edit';
import Login from '../screens/Login';
//import { Text } from 'native-base';

/*export const AppNavigator = createStackNavigator(
    {
        Expenses: Expenses,
        Login: Login
    },
    {
        initialRouteName: "Login",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ccee99',

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: "center"
            },
            headerTitle: <Text>Welcome!</Text>
        }
    }
);*/

export const AppNavigator = createSwitchNavigator({
    Login: Login,
    Expenses: Expenses
},
{
    initialRouteName: 'Expenses'
});