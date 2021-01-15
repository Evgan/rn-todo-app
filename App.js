import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './src/store/store';
import {TodosScreen, LoginScreen, RegistrationsScreen} from './src/screens'

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Login'
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name='todos'
                    >
                        {props => <TodosScreen {...props} />}
                    </Stack.Screen>
                    <Stack.Screen
                        name='Registrations'
                        component={RegistrationsScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
