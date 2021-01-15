import React from 'react';
import { View, Text } from 'react-native';

import { Todos } from '../components/Todos/index'

const TodosScreen = (props) =>  {
    console.log('----------------------- props:');
    console.log(props);
    const { id, email, fullName } = props?.route?.params?.user;
    return (
        <View>
            <Text>Сцена TODO</Text>
            <Text>id: {id}</Text>
            <Text>email: {email}</Text>
            <Text>fullName: {fullName}</Text>
            <Todos />
        </View>
    );
};

export default TodosScreen;
